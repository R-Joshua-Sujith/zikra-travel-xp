import React from "react";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import "./Page1.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useEffect } from "react";
import SmallLoader from "./SmallLoader";

const Page1 = () => {
  const userStatus = useSelector((state) => state.user);
  const email = useSelector((state) => state.user_email);
  const type = useSelector((state) => state.user_type);
  console.log(email, type, userStatus);
  const [loading, setLoading] = useState(false);
  const [sectionOne, setSectionOne] = useState(true);
  const [sectionTwo, setSectionTwo] = useState(false);
  const [sectionThree, setSectionThree] = useState(false);
  const [sectionFour, setSectionFour] = useState(false);
  const [sectionFive, setSectionFive] = useState(false);

  //sectionOne
  const [optionOne, setOptionOne] = useState(
    JSON.parse(localStorage.getItem("step1_1")) || []
  );
  const [answer1_2, setAnswer1_2] = useState(
    localStorage.getItem("step1_2") || ""
  );
  const [answer1_3, setAnswer1_3] = useState(
    localStorage.getItem("step1_3") || ""
  );
  // const [answer1_3,]
  const handleOptionOne = (option) => {
    if (optionOne.includes(option)) {
      setOptionOne(optionOne.filter((item) => item !== option));
    } else {
      setOptionOne([...optionOne, option]);
    }
  };

  //sectionTwo
  const [optionTwo, setOptionTwo] = useState(
    JSON.parse(localStorage.getItem("step2_1")) || []
  );
  const [answer2_1, setAnswer2_1] = useState(
    localStorage.getItem("step2_2") || ""
  );
  const handleOptionTwo = (option) => {
    if (optionTwo.includes(option)) {
      setOptionTwo(optionTwo.filter((item) => item !== option));
    } else {
      setOptionTwo([...optionTwo, option]);
    }
  };

  //sectionThree
  const [answer3_1, setAnswer3_1] = useState(
    localStorage.getItem("step3_1") || ""
  );
  const [answer3_2, setAnswer3_2] = useState(
    localStorage.getItem("step3_2") || ""
  );

  //sectionFour
  const [optionFour, setOptionFour] = useState(
    JSON.parse(localStorage.getItem("step4_1")) || []
  );
  const [answer4_1, setAnswer4_1] = useState(
    localStorage.getItem("step4_2") || ""
  );
  const handleOptionFour = (option) => {
    if (optionFour.includes(option)) {
      setOptionFour(optionFour.filter((item) => item !== option));
    } else {
      setOptionFour([...optionFour, option]);
    }
  };

  const [answer5_1, setAnswer5_1] = useState(
    localStorage.getItem("step5_1") || ""
  );
  const [answer5_2, setAnswer5_2] = useState(
    localStorage.getItem("step5_2") || ""
  );

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("step1_1", JSON.stringify(optionOne));
    localStorage.setItem("step1_2", answer1_2);
    localStorage.setItem("step1_3", answer1_3);

    localStorage.setItem("step2_1", JSON.stringify(optionTwo));
    localStorage.setItem("step2_2", answer2_1);

    localStorage.setItem("step3_1", answer3_1);
    localStorage.setItem("step3_2", answer3_2);

    localStorage.setItem("step4_1", JSON.stringify(optionFour));
    localStorage.setItem("step4_2", answer4_1);

    localStorage.setItem("step5_1", answer5_1);
    localStorage.setItem("step5_2", answer5_2);
  }, []);

  return (
    <div className="survey-form">
      <HomeIcon
        className="home-arrow"
        onClick={() => {
          navigate("/");
        }}
      />
      <div className="survey-form-container">
        {sectionOne && (
          <div className="survey-form-page1-container other">
            <h1>Survey form</h1>
            <h2>Step 1 / Step 5</h2>

            <p className="question">
              1. What type of travel content are you most interested in ? Select
              All that apply
            </p>

            <div className="checkbox-container">
              <input
                type="checkbox"
                value="Destination guides"
                checked={optionOne.includes("Destination guides")}
                onChange={() => handleOptionOne("Destination guides")}
              />
              <label>Destination guides</label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                value="Travel Itineraries"
                checked={optionOne.includes("Travel Itineraries")}
                onChange={() => handleOptionOne("Travel Itineraries")}
              />
              <label>Travel Itineraries</label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                value="Accomodation reviews"
                checked={optionOne.includes("Accomodation reviews")}
                onChange={() => handleOptionOne("Accomodation reviews")}
              />
              <label>Accomodation reviews</label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                value="Local Cuisine and restaurant recommendations"
                checked={optionOne.includes(
                  "Local Cuisine and restaurant recommendations"
                )}
                onChange={() =>
                  handleOptionOne(
                    "Local Cuisine and restaurant recommendations"
                  )
                }
              />
              <label>Local Cuisine and restaurant recommendations</label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                value="Adventure and outdoor activities"
                checked={optionOne.includes("Adventure and outdoor activities")}
                onChange={() =>
                  handleOptionOne("Adventure and outdoor activities")
                }
              />
              <label>Adventure and outdoor activites</label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                value="Cultural Experiences"
                checked={optionOne.includes("Cultural Experiences")}
                onChange={() => handleOptionOne("Cultural Experiences")}
              />
              <label>Cultural Experiences</label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                value="Historical and heritage sites"
                checked={optionOne.includes("Historical and heritage sites")}
                onChange={() =>
                  handleOptionOne("Historical and heritage sites")
                }
              />
              <label>Historical and heritage sites</label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                value="Historical and heritage sites"
                checked={optionOne.includes("Budget Travel Tips")}
                onChange={() => handleOptionOne("Budget Travel Tips")}
              />
              <label>Budget travel tips</label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                value="Sustainability and eco-friendly travel"
                checked={optionOne.includes(
                  "Sustainability and eco-friendly travel"
                )}
                onChange={() =>
                  handleOptionOne("Sustainability and eco-friendly travel")
                }
              />
              <label>Sustainability and eco-friendly travel</label>
            </div>

            <p className="question">
              2. Is there a specific destination or type of travel content that
              you would like to see more of our website ?
            </p>
            <textarea
              className="survey-textArea"
              value={answer1_2}
              onChange={(event) => {
                setAnswer1_2(event.target.value);
              }}
            ></textarea>

            <p className="question">
              3. What kind of travel information would help you plan your trips
              more effectively ? (e.g, visa requirements,packing tips, travel
              insurance)
            </p>
            <textarea
              className="survey-textArea"
              value={answer1_3}
              onChange={() => {
                setAnswer1_3(event.target.value);
              }}
            ></textarea>
            <div className="next-container">
              <ArrowForwardIcon
                className="survey-next-one"
                onClick={() => {
                  if (
                    optionOne.length === 0 ||
                    answer1_2 === "" ||
                    setAnswer1_3 === ""
                  ) {
                    toast.warning("Please fill all the fields");
                  } else {
                    localStorage.setItem("step1_1", JSON.stringify(optionOne));
                    localStorage.setItem("step1_2", answer1_2);
                    localStorage.setItem("step1_3", answer1_3);
                    setSectionOne(false);
                    setSectionTwo(true);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                    toast.info("Progress Saved");
                  }
                }}
              />
            </div>
          </div>
        )}

        {sectionTwo && (
          <div className="survey-form-page1-container other">
            <h2>Step 2 / Step 5</h2>

            <p className="question">
              1. What would be the primary reasons for you to return to our
              travel experience website ? (Select all that apply)
            </p>

            <div className="checkbox-container">
              <input
                type="checkbox"
                value="Planning future trips"
                checked={optionTwo.includes("Planning future trips")}
                onChange={() => handleOptionTwo("Planning future trips")}
              />
              <label>Planning future trips</label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                value="Reading travel stories and experiences"
                checked={optionTwo.includes(
                  "Reading travel stories and experiences"
                )}
                onChange={() =>
                  handleOptionTwo("Reading travel stories and experiences")
                }
              />
              <label>Reading travel stories and experiences</label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                value="Staying updated on travel news and trends"
                checked={optionTwo.includes(
                  "Staying updated on travel news and trends"
                )}
                onChange={() =>
                  handleOptionTwo("Staying updated on travel news and trends")
                }
              />
              <label>Staying updated on travel news and trends</label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                value="Booking accomodations and activites"
                checked={optionTwo.includes(
                  "Booking accomodations and activites"
                )}
                onChange={() =>
                  handleOptionTwo("Booking accomodations and activites")
                }
              />
              <label>Booking accomodations and activities</label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                value="Connecting with other travellers"
                checked={optionTwo.includes("Connecting with other travellers")}
                onChange={() =>
                  handleOptionTwo("Connecting with other travellers")
                }
              />
              <label>Connecting with other travellers</label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                value="Participating in travel forums or discussions"
                checked={optionTwo.includes(
                  "Participating in travel forums or discussions"
                )}
                onChange={() =>
                  handleOptionTwo(
                    "Participating in travel forums or discussions"
                  )
                }
              />
              <label>Participating in travel forums or discussions</label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                value="Finding exclusive travel deals and discounts"
                checked={optionTwo.includes(
                  "Finding exclusive travel deals and discounts"
                )}
                onChange={() =>
                  handleOptionTwo(
                    "Finding exclusive travel deals and discounts"
                  )
                }
              />
              <label>Finding exclusive travel deals and discounts</label>
            </div>

            <p className="question">
              2. Are there specific features or functionalities you would like
              us to add to the website that would encourage you to return more
              often?
            </p>
            <textarea
              className="survey-textArea"
              value={answer2_1}
              onChange={(e) => {
                setAnswer2_1(e.target.value);
              }}
            ></textarea>

            <div className="next-container">
              <ArrowBackIcon
                className="survey-next-one"
                onClick={() => {
                  localStorage.setItem("step2_1", JSON.stringify(optionTwo));
                  localStorage.setItem("step2_2", answer2_1);
                  setSectionOne(true);
                  setSectionTwo(false);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                  toast.info("Progress Saved");
                }}
              />
              <ArrowForwardIcon
                className="survey-next-one"
                onClick={() => {
                  if (optionTwo.length === 0 || answer2_1 === "") {
                    toast.warning("Please fill the fields");
                  } else {
                    localStorage.setItem("step2_1", JSON.stringify(optionTwo));
                    localStorage.setItem("step2_2", answer2_1);
                    setSectionTwo(false);
                    setSectionThree(true);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                    toast.info("Progress Saved");
                  }
                }}
              />
            </div>
          </div>
        )}
        {sectionThree && (
          <div className="survey-form-page1-container other">
            <h2>Step 3/ Step 5</h2>

            <p className="question">
              1. Would you be interested in sharing your own travel experiences,
              tips, and recommendations on our website ?
            </p>
            <textarea
              className="survey-textArea"
              value={answer3_1}
              onChange={(e) => setAnswer3_1(e.target.value)}
            ></textarea>

            <p className="question">
              2. What motivates you to contribute to a travel website ? (e.g
              helping others, sharing experiences, earning rewards, recogition)
            </p>
            <textarea
              className="survey-textArea"
              value={answer3_2}
              onChange={(e) => setAnswer3_2(e.target.value)}
            ></textarea>
            <div className="next-container">
              <ArrowBackIcon
                className="survey-next-one"
                onClick={() => {
                  localStorage.setItem("step3_1", answer3_1);
                  localStorage.setItem("step3_2", answer3_2);
                  setSectionTwo(true);
                  setSectionThree(false);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                  toast.info("Progress Saved");
                }}
              />
              <ArrowForwardIcon
                className="survey-next-one"
                onClick={() => {
                  if (answer3_1 === "" || answer3_2 === "") {
                    toast.warning("Please fill all the fields");
                  } else {
                    localStorage.setItem("step3_1", answer3_1);
                    localStorage.setItem("step3_2", answer3_2);
                    setSectionThree(false);
                    setSectionFour(true);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                    toast.info("Progress Saved");
                  }
                }}
              />
            </div>
          </div>
        )}
        {sectionFour && (
          <div className="survey-form-page1-container other">
            <h2>Step 4 / Step 5</h2>

            <p className="question">
              1. How would you prefer to recieve updates from our website
              ?(Select all that apply)
            </p>

            <div className="checkbox-container">
              <input
                type="checkbox"
                value="Email newsletters"
                checked={optionFour.includes("Email newsletters")}
                onChange={() => handleOptionFour("Email newsletters")}
              />
              <label>Email newsletters</label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                value="Social media updates"
                checked={optionFour.includes("Social media updates")}
                onChange={() => handleOptionFour("Social media updates")}
              />
              <label>Social media updates</label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                value="Push notifications on the website or app"
                checked={optionFour.includes(
                  "Push notifications on the website or app"
                )}
                onChange={() =>
                  handleOptionFour("Push notifications on the website or app")
                }
              />
              <label>Push notifications on the website or app</label>
            </div>

            <p className="question">
              2. Are there specific topics or content categories that you'd like
              to receive regular updates on ?
            </p>
            <textarea
              className="survey-textArea"
              value={answer4_1}
              onChange={(e) => {
                setAnswer4_1(e.target.value);
              }}
            ></textarea>

            <div className="next-container">
              <ArrowBackIcon
                className="survey-next-one"
                onClick={() => {
                  localStorage.setItem("step4_1", JSON.stringify(optionFour));
                  localStorage.setItem("step4_2", answer4_1);
                  setSectionFour(false);
                  setSectionThree(true);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                  toast.info("Progress Saved");
                }}
              />
              <ArrowForwardIcon
                className="survey-next-one"
                onClick={() => {
                  if (optionFour.length === 0 || answer4_1 === "") {
                    toast.warning("Please fill all the fields");
                  } else {
                    localStorage.setItem("step4_1", JSON.stringify(optionFour));
                    localStorage.setItem("step4_2", answer4_1);
                    setSectionFive(true);
                    setSectionFour(false);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                    toast.info("Progress Saved");
                  }
                }}
              />
            </div>
          </div>
        )}
        {sectionFive && (
          <div className="survey-form-page1-container other">
            <h2>Step 5 / Step 5</h2>

            <p className="question">
              1. Do you have any suggestions or feedback on how we can improve
              our travel experience website to better meet your needs and
              expectations ?
            </p>
            <textarea
              className="survey-textArea"
              value={answer5_1}
              onChange={(e) => setAnswer5_1(e.target.value)}
            ></textarea>

            <p className="question">
              2. Is there anything else you would like to share with us about
              your travel interests, experience, or suggestions for our website?
            </p>
            <textarea
              className="survey-textArea"
              value={answer5_2}
              onChange={(e) => setAnswer5_2(e.target.value)}
            ></textarea>
            <div className="next-container">
              <ArrowBackIcon
                className="survey-next-one"
                onClick={() => {
                  localStorage.setItem("step5_1", answer5_1);
                  localStorage.setItem("step5_2", answer5_2);
                  setSectionFive(false);
                  setSectionFour(true);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                  toast.info("Progress Saved");
                }}
              />
              {loading ? (
                <SmallLoader />
              ) : (
                <button
                  className="survey-btn"
                  onClick={() => {
                    if (answer5_1 === "" || answer5_2 == "") {
                      toast.warning("Please fill the fields");
                    } else {
                      setLoading(true);
                      axios
                        .post("http://localhost:5000/submitFormData", {
                          user_type: type,
                          user_email: email,

                          step1_1: optionOne,
                          step1_2: answer1_2,
                          step1_3: answer1_3,

                          step2_1: optionTwo,
                          step2_2: answer2_1,

                          step3_1: answer3_1,
                          step3_2: answer3_2,

                          step4_1: optionFour,
                          step4_2: answer4_1,

                          step5_1: answer5_1,
                          step5_2: answer5_2,
                        })
                        .then((res) => {
                          setLoading(false);
                          toast.success(res.data.message);
                          setTimeout(() => {
                            navigate("/");
                          }, 2000);

                          localStorage.setItem("step1_1", JSON.stringify([]));
                          localStorage.setItem("step1_2", "");
                          localStorage.setItem("step1_3", "");

                          localStorage.setItem("step2_1", JSON.stringify([]));
                          localStorage.setItem("step2_2", "");

                          localStorage.setItem("step3_1", "");
                          localStorage.setItem("step3_2", "");

                          localStorage.setItem("step4_1", JSON.stringify([]));
                          localStorage.setItem("step4_2", "");

                          localStorage.setItem("step5_1", "");
                          localStorage.setItem("step5_2", "");
                        })
                        .catch((err) => {
                          setLoading(false);
                          toast.error(err.response.data.message);
                        });
                    }
                  }}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Page1;
