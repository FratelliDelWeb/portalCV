import React from "react";
import CallButton from "./CallButton";
import MuteButton from "./MuteButton";
import NumberInputText from "./NumberInputText";
import CountrySelectBox from "./CountrySelectBox";
import DTMFTone from "./DTMFTone";
import LogBox from "./LogBox";
import { useState, useEffect } from "react";
import { Device as ClientDevice } from "twilio-client";

function Device() {
  const baseUrl = "/api/call";

  let [phone, setPhone] = useState({
    Device: {},
  });

  const [state, setState] = useState({
    muted: false,
    log: "Not Connected",
    onPhone: false,
    countryCode: "39",
    currentNumber: "",
    isValidNumber: false,
    countries: [
      { name: "United States", cc: "1", code: "us" },
      { name: "Great Britain", cc: "44", code: "gb" },
      { name: "Colombia", cc: "57", code: "co" },
      { name: "Ecuador", cc: "593", code: "ec" },
      { name: "Estonia", cc: "372", code: "ee" },
      { name: "Germany", cc: "49", code: "de" },
      { name: "Hong Kong", cc: "852", code: "hk" },
      { name: "Ireland", cc: "353", code: "ie" },
      { name: "Singapore", cc: "65", code: "sg" },
      { name: "Spain", cc: "34", code: "es" },
      { name: "Brazil", cc: "55", code: "br" },
      { name: "Italy", cc: "39", code: "it" },
    ],
  });

  const getToken = async () => {
    fetch(baseUrl + "/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then(function (data) {
        let tempDevice = phone;
        tempDevice.Device = new ClientDevice(data.token);
        setPhone(tempDevice);

        console.log("phone =======>");
        console.log(phone);
        // Configure event handlers for Twilio TwilioDevice
        phone.Device.on("disconnect", function () {
          setState({
            ...state,
            onPhone: false,
            log: "Call ended.",
          });
        });

        phone.Device.on("ready", function () {
          setState({
            ...state,
            log: "Connected",
          });
        });

        phone.Device.on("error", (e) => {
          console.log(e);
        });
      })
      .catch(function (err) {
        console.log(err);
        setState({
          ...state,
          log: "Could not fetch token, see console.log",
        });
      });
  };

  useEffect(() => {
    getToken();
  }, []);

  const handleChangeNumber = (e) => {
    setState({
      ...state,
      currentNumber: e.target.value,
      isValidNumber: /^([0-9]|#|\*)+$/.test(
        e.target.value.replace(/[-()\s]/g, "")
      ),
    });
  };

  const handleToggleMute = () => {
    var muted = !state.muted;
    setState({
      ...state,
      muted: muted,
    });
    phone.Device.activeConnection().mute(muted);
  };

  const handleToggleCall = () => {
    if (!state.onPhone) {
      setState({
        ...state,
        muted: false,
        onPhone: true,
      });
      // make outbound call with current number
      var n = "+" + state.countryCode + state.currentNumber.replace(/\D/g, "");
      phone.Device.connect({ number: n });
      setState({
        ...state,
        log: "Calling " + n,
      });
    } else {
      // hang up call in progress
      phone.Device.disconnectAll();
    }
  };

  const handleChangeCountryCode = (countryCode) => {
    setState({
      ...state,
      countryCode: countryCode,
    });
  };

  return (
    <div id="dialer">
      <div id="dial-form" className="input-group input-group-sm">
        {
          <CountrySelectBox
            countries={state.countries}
            countryCode={state.countryCode}
            handleOnChange={handleChangeCountryCode}
          />
        }
        <NumberInputText
          currentNumber={state.currentNumber}
          handleOnChange={handleChangeNumber}
        />
      </div>
      <div className="controls">
        <CallButton
          handleOnClick={handleToggleCall}
          disabled={!state.isValidNumber}
          onPhone={state.onPhone}
        />
        {state.onPhone ? (
          <MuteButton handleOnClick={handleToggleMute} muted={state.muted} />
        ) : null}
      </div>
      {state.onPhone ? <DTMFTone /> : null}
      <LogBox text={state.log} />
    </div>
  );
}

export default Device;
