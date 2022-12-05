import React from "react";

export default function DTMFTone() {

    const sendDigit = (digit) => {
        Device.activeConnection.sendDigit(digit)
    }

    return (
        <div className="keys">
          <div className="key-row">
            <button className="btn btn-circle btn-default" onClick={() => sendDigit('1')}>1</button>
            <button className="btn btn-circle btn-default" onClick={() => sendDigit('2')}>2
              <span>A B C</span>
            </button>
            <button className="btn btn-circle btn-default" onClick={() => sendDigit('3')}>3
              <span>D E F</span>
            </button>
          </div>
          <div className="key-row">
            <button className="btn btn-circle btn-default" onClick={() => sendDigit('4')}>4
              <span>G H I</span>
            </button>
            <button className="btn btn-circle btn-default" onClick={() => sendDigit('5')}>5
              <span>J K L</span>
            </button>
            <button className="btn btn-circle btn-default" onClick={() => sendDigit('6')}>6
              <span>M N O</span>
            </button>
          </div>
          <div className="key-row">
            <button className="btn btn-circle btn-default" onClick={() => sendDigit('7')}>7
              <span>P Q R S</span>
            </button>
            <button className="btn btn-circle btn-default" onClick={() => sendDigit('8')}>8
              <span>T U V</span>
            </button>
            <button className="btn btn-circle btn-default" onClick={() => sendDigit('9')}>9
              <span>W X Y Z</span>
            </button>
          </div>
          <div className="key-row">
            <button className="btn btn-circle btn-default" onClick={() => sendDigit('*')}>*</button>
            <button className="btn btn-circle btn-default" onClick={() => sendDigit('0')}>0</button>
            <button className="btn btn-circle btn-default" onClick={() => sendDigit('#')}>#</button>
          </div>
        </div>
      );
}