pragma solidity >=0.4.22 <0.6.0;
contract Splitter {
    struct Entity {
        address payable account;
        uint256 value;
    }
    struct PendingEntity {
        address payable account;
        int256 value;
        uint8 percentage;
    }
    mapping(address => Entity) paid;
    address[] parties;
    address caller;
    mapping(address => PendingEntity) pending;

    constructor(address[] memory participants, address payable receiver, uint256[] memory values) public payable {
        caller = msg.sender;
        parties = participants;
        for(uint i = 0; i < participants.length;i++){
            paid[participants[i]].value = values[i];
        }
        
        if(participants.length < 10){
            fetchSplits();
        }
        
        send(receiver);
    }
    event Request(address payee, uint256 val);
    event Resolve(address payee, uint256 val);
    function send(address payable receiver) public payable {
        receiver.transfer(msg.value);
    }
    function fetchSplits() private {
        uint256 total = 0;
        uint256 negative_total = 0;
        for(uint8 i = 0;i<parties.length;i++){
            total += uint256(paid[parties[i]].value);
        }

        uint256 part = uint256(total)/parties.length;
        for(uint8 i = 0;i < parties.length;i++){
            int256 val = int256(part) - int256(paid[parties[i]].value);
            pending[parties[i]].value = val;
            if(val >= 0) {
                if(val > 0) {
                    emit Request(parties[i], uint256(val));
                }
                pending[parties[i]].percentage = 0;
            } else {
                negative_total += uint256(val * -1);
                pending[parties[i]].percentage = 1;
            }
        }
        for(uint8 i = 0 ; i < parties.length;i++){
            int256 val = pending[parties[i]].value;
            if(val < 0) {
                uint8 percentage = uint8((uint32(val * -1) * 100) / negative_total);
                pending[parties[i]].percentage = percentage;
                
            }
        }

    }
    function check() public {
        for(uint8 i = 0; i < parties.length ; i++){
            int256 val = pending[parties[i]].value;
            if(val > 0) {
                emit Request(parties[i], uint256(val * -1));
            }
        }
    }
    function resolve(address sender) public payable {
        if(parties.length < 10){
            pending[sender].value = pending[sender].value - int256(msg.value);
            for(uint8 i = 0;i < parties.length; i++) {
                if(pending[parties[i]].percentage > 0) {
                    address payable en_addr = address(uint160(parties[i]));
                    uint256 val = uint256(pending[parties[i]].percentage * msg.value / 100);
                    en_addr.transfer(val);
                    emit Resolve(en_addr, val);
                }
            }
            check();
        }
    }
}
