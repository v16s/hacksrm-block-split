import React from 'react';
import { Button, Input } from 'reactstrap';
import Web3 from 'web3';
class Splits extends React.Component<
  {
    toAmount: number;
    toAddress: string;
  },
  {
    rows?: { address: string; amount: string }[];
  }
> {
  state = {
    rows: [{ address: '', amount: '' }],
  };
  onSubmit = () => {
    const { toAmount, toAddress } = this.props;
  };
  setAmount = (value: string, index: number) => {
    let { rows } = this.state;
    rows[index].amount = value;
    this.setState({ rows });
  };
  setAddress = (value: string, index: number) => {
    let { rows } = this.state;
    rows[index].address = value;
    this.setState({ rows });
  };
  removeRow = (index: number) => {
    let { rows } = this.state;
    this.setState({ rows: rows.filter((d, i) => i != index) });
  };
  addRow = () => {
    let { rows } = this.state;
    if (rows.length <= 9) {
      this.setState({ rows: [...rows, { address: '', amount: '' }] });
    }
  };
  submit = () => {
    let values = this.state.rows.map(d => Web3.utils.toWei(d.amount)),
      participants = this.state.rows.map(d => d.address);
    if (participants.every(d => Web3.utils.isAddress(d))) {
      // Web3 code goes here
    }
  };
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '100vw',
          minHeight: 'calc(100vh - 76px)',
        }}
      >
        <h3 style={{ marginBottom: 0 }}>
          <span>Splits</span>
        </h3>

        <p style={{ margin: '2em' }}>
          Enter the addresses of the people you want to split the amount with
          along with the amounts that they have contributed.
        </p>
        <div
          style={{
            width: '95%',
            maxWidth: '600px',
          }}
        >
          {this.state.rows.map((d, i) => (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Input
                defaultValue=''
                placeholder='Ethereum Address'
                type='text'
                style={{
                  width: '60%',
                }}
                value={d.address}
                onChange={e => this.setAddress(e.target.value, i)}
              />
              <Input
                defaultValue=''
                placeholder='Amount'
                type='text'
                style={{
                  width: '30%',
                }}
                value={d.amount}
                onChange={e => this.setAmount(e.target.value, i)}
              />{' '}
              <Button
                onClick={e => this.removeRow(i)}
                className='btn-icon btn-round'
                color='danger'
              >
                <i className='tim-icons icon-simple-remove' />
              </Button>
            </div>
          ))}

          <div
            style={{
              margin: '5px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button className='btn-round' color='primary' type='button'>
              Submit
            </Button>
            <Button
              className='btn-icon btn-round'
              color='info'
              onClick={e => this.addRow()}
            >
              <i className='tim-icons icon-simple-add' />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export { Splits };
