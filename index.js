const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/prepInstaBatch_2")
  .then(() => console.log("Database is connected"))
  .catch(() => console.log("database not connected"));

// create data in mongoDB

// create collection of details

// const htmlData = {
//   title: "HTML",
//   noOfVideos: 34,
//   cType: "Front End",
//   author: "Durga",
//   active: true,
// };

// two type of mongoose create
//  1.collections
//  2.schema

// create schema data

const courseSchema = new mongoose.Schema({
  title: String,
  noOfVideos: Number,
  cType: String,
  author: String,
  active: Boolean,
});

// create collection

const courseRecord = new mongoose.model("courseRecord", courseSchema);

// save

// const createCourse = async () => {
//   const courseData = new courseRecord(htmlData);
//   await courseData.save();
//   console.log(courseData);
// };

// createCourse();

//

// const createDocument = async () => {
//   const courseDetails = await courseRecord.create(
//     {
//       title: "Node JS",
//       noOfVideos: 34,
//       cType: "Back End",
//       author: "Durga",
//       active: true,
//     },
//     {
//       title: "HTML",
//       noOfVideos: 34,
//       cType: "Front End",
//       author: "Durga",
//       active: true,
//     },
//     {
//       title: "Express",
//       noOfVideos: 34,
//       cType: "Back End",
//       author: "Durga",
//       active: true,
//     },
//     {
//       title: "JS",
//       noOfVideos: 34,
//       cType: "Front End",
//       author: "Durga",
//       active: true,
//     },
//     {
//       title: "CSS",
//       noOfVideos: 34,
//       cType: "Front End",
//       author: "Durga",
//       active: true,
//     },
//     {
//       title: "React JS",
//       noOfVideos: 34,
//       cType: "Front End",
//       author: "Durga",
//       active: true,
//     }
//     // console.log(courseDetails)
//   );
// };

// createDocument();

const getDocument = async () => {
  // const Details = await courseRecord.find();

  // query and projection part

  const Details = await courseRecord.find(
    { cType: "Front End" },
    { title: 1, _id: 0 }
  );
  console.log(Details);
};
getDocument();
