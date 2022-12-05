const accountSid = "AC4778cf86c941a7daa50da538f5c7a628";
const authToken = "3286507d46fe0477807fbf480e276ddd";

const apiSecret = "yTCt0SSXG7QFe02cYBtyHWByRNl83vCs";
const apiKey = "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yy";
const appSid = "APd7d694578baadc2f6dcca09714073c1e";

const client = require("twilio")(accountSid, authToken);
const twilio = require("twilio");
const ClientCapability = twilio.jwt.ClientCapability;
const VoiceResponse = twilio.twiml.VoiceResponse;
const from = "+16402213496";
/* const url = "https://mirabillia-teleportal.herokuapp.com/api/call/request"
const local = "http://localhost:5000/api/call/request" */

const TwilioClient = {
  createCall: async (salesNumber, phoneNumber) => {
    let url =
      "https://mirabillia-teleportal.herokuapp.com/api" +
      "/outbound/" +
      salesNumber;
    let options = {
      to: phoneNumber,
      from: from,
      url: url,
    };

    console.log("url =>");
    console.log(url);
    console.log("options =>");
    console.log(options);
    console.log("client =>");
    console.log(client);

    return client.calls
      .create(options)
      .then((message) => {
        console.log(message.responseText);
        return Promise.resolve("Thank you! We will be calling you shortly.");
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject(error);
      });
  },

  voiceResponse: (salesNumber, Voice = VoiceResponse) => {
    let twimlResponse = new Voice();
    twimlResponse.say(
      "Thanks for contacting our sales department. Our " +
        "next available representative will take your call. ",
      { voice: "alice" }
    );
    twimlResponse.dial(salesNumber);
    return twimlResponse.toString();
  },
};

exports.call = async (req, res, next) => {
  let salesNumber = req.body.salesNumber;
  let phoneNumber = req.body.phoneNumber;

  console.log("TwillioClient =>");
  TwilioClient.createCall(salesNumber, phoneNumber)
    .then((result) => {
      res.send({ message: result });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

exports.addCallerID = async (req, res, next) => {
  try {
    client.validationRequests
      .create({ friendlyName: "Antonio Maretta", phoneNumber: "+393519907274" })
      .then((validation_request) =>
        console.log(validation_request.friendlyName)
      );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.returnTwiml = async (req, res, next) => {
  let result = TwilioClient.voiceResponse(req.params.salesNumber);
  res.send(result);
};

exports.connect = async (req, res, next) => {
  var phoneNumber = req.body.phoneNumber;
  var callerId = from;
  var twiml = new VoiceResponse();

  var dial = twiml.dial({ callerId: callerId });

  if (phoneNumber) {
    dial.number({}, phoneNumber);
  }

  res.send(twiml.toString());
};

exports.generateToken = async (req, res, next) => {
  console.log("genero token twillio");
  const capability = new ClientCapability({
    accountSid: accountSid,
    authToken: authToken,
  });

  capability.addScope(
    new ClientCapability.OutgoingClientScope({
      applicationSid: appSid,
    })
  );

  const token = capability.toJwt();

  // Include token in a JSON response
  res.send({
    token: token,
  });
};
