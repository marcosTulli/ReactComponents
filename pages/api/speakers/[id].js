//import { data } from '../../../SpeakerData';
import path from "path";
import fs, { write } from "fs";
import { rect } from "react-placeholder/lib/placeholders";

const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export default async function handler(req, res) {
  //res.status(200).send(JSON.stringify(data, null, 2));

  const method = req?.method;
  const id = parseInt(req?.query.id);
  const recordFromBody = req?.body;
  const jsonFile = path.resolve("./", "db.json");
  switch (method) {
    case "POST":
      await postMethod();
      break;
    case "PUT":
      await putMethod();
      break;
    case "DELETE":
      await deleteMethod();
      break;
    default:
      res.status(501).send(`Method ${method} not implemented`);
      console.log(`Method ${method} not implemented`);
  }


  async function putMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const speakers = JSON.parse(readFileData).speakers;
      if (!speakers) {
        res.status(404).send("File Not Found on server");
      } else {
        const newSpeakersArray = speakers.map(function (rec) { 
          return rec.id === id ? recordFromBody : rec;
        });
        writeFile(jsonFile, JSON.stringify({ speakers: newSpeakersArray }, null, 2 ));
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(recordFromBody, null, 2));
        console.log(`PUT /api/speakers/${id} status: 200`);
      }
    } catch (e) {
      res.status(500).send(`PUT /api/speakers/${id} status: 500 unexpected`)
      console.log(`PUT /api/speakers/${id} status: 200`, e);
    }
  }
}

