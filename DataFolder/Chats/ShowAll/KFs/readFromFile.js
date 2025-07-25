import fs from "fs";
const CommonDataPath = "Data";
const CommonFileName = "chats";

const StartFunc = () => {
  const LocalFileName = CommonFileName;

  const filePath = `${CommonDataPath}/${LocalFileName}.json`;
  let LocalReturnObject = {};
  LocalReturnObject.KTF = false;

  try {
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

      LocalReturnObject.KTF = true;
      LocalReturnObject.JsonData = data;

      return LocalReturnObject;
    } else {
      LocalReturnObject.KReason = `File ${LocalFileName}.json does not exist in ${CommonDataPath} folder.`;
      console.warn(LocalReturnObject.KReason);

      return LocalReturnObject;
    };
  } catch (err) {
    console.error('Error:', err);
  };

  return LocalReturnObject;
};

export { StartFunc };