import Photo from "./assets/prajjwal-photo.jpg";
import RESUME from "./assets/PD1.pdf";
import { Button } from "@cred/neopop-web/lib/components";
import {
  CHAT_ICON,
  CMI_ICON,
  GITHUB_ICON,
  LINKEDIN_ICON,
  RIGHT_ARROW_ICON,
  SM_ICON,
  TRAVEL_ICON,
} from "./icons";
function App() {
  return (
    <div className="fixed top-0 left-0 bg-[#313131] w-[100%] h-[100%] overflow-y-auto">
      <div className="flex justify-center items-center p-1 m-2">
        <div className="p-1 w-fit h-fit bg-white rounded-full shadow-sm shadow-gray-300">
          <img
            src={Photo}
            alt="loading"
            className="w-[150px] h-[150px] rounded-full  border border-gray-600"
          />
        </div>
      </div>
      <div className="flex justify-center items-center p-1 m-1 text-gray-300 font-bold font-merienda text-2xl">
        <p>Prajjwal Dubey</p>
      </div>
      <div className="flex justify-center items-center p-1 m-1 text-gray-400 font-bold font-merienda">
        <p>Software Developer</p>
      </div>
      <div className="flex justify-center items-center m-1 p-1">
        <a href={RESUME} download="prajjwal-resume">
          <Button
            variant="primary"
            kind="elevated"
            size="medium"
            colorMode="light"
          >
            Download Resume
          </Button>
        </a>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center items-center p-1">
          <div className="flex justify-center items-center m-2">
            <a
              href="https://www.linkedin.com/in/prajjwal-dubey-8a1938182/"
              target="_blank"
            >
              <img
                src={LINKEDIN_ICON}
                alt="loading"
                className="opacity-35 hover:opacity-100 cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center p-1">
          <div className="flex justify-center items-center m-2">
            <a href="https://github.com/Prajjwal98Dubey" target="_blank">
              <img
                src={GITHUB_ICON}
                alt="loading"
                className="opacity-35 hover:opacity-100 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center m-2 p-1">
        <p className="text-center font-bold font-bungee lg:text-2xl sm:text-xl ">
          Projects
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-[75%] h-fit lg:flex lg:justify-center ">
          <div className="w-[95%] p-2 m-1 h-[500px]  rounded-md border border-dashed hover:bg-gray-700 cursor-pointer">
            <div className="flex justify-center m-1 p-1">
              <img
                src={SM_ICON}
                alt="loading"
                className="w-[95%] h-[300px] rounded-md border border-gray-400"
              />
            </div>
            <div className="flex justify-center m-1 p-1">
              <p className="text-2xl font-white text-white font-merienda font-bold">
                Reddle
              </p>
            </div>
            <div className="flex justify-center m-1 p-1">
              <p className="text-[14px] text-gray-400 font-merienda text-center">
                a social media platform to post your images, find new people and
                build communities.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://github.com/Prajjwal98Dubey/The-Boring-Media"
                target="_blank"
              >
                <div className="hover:bg-red-400 p-1">
                  <Button
                    variant="primary"
                    kind="elevated"
                    size="medium"
                    colorMode="light"
                  >
                    <div className="flex">
                      <p className="flex justify-center p-1 ">Git Repo</p>
                      <span className="flex justify-center p-1 ">
                        <img src={RIGHT_ARROW_ICON} alt="loading" />
                      </span>
                    </div>
                  </Button>
                </div>
              </a>
            </div>
          </div>
          <div className="w-[95%] p-2 m-1 h-[500px] rounded-md border border-dashed hover:bg-gray-700 cursor-pointer">
            <div className="flex justify-center m-1 p-1">
              <img
                src={TRAVEL_ICON}
                alt="loading"
                className="w-[95%] h-[300px] rounded-md border border-gray-400"
              />
            </div>
            <div className="flex justify-center m-1 p-1">
              <p className="text-2xl font-white text-white font-merienda font-bold">
                Travel Mate
              </p>
            </div>
            <div className="flex justify-center m-1 p-1">
              <p className="text-[14px] text-gray-400 font-merienda text-center">
                a platform where people can group with other travellers and
                explore the world.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://github.com/Prajjwal98Dubey/Travel-Mate/"
                target="_blank"
              >
                <div className="hover:bg-red-400 p-1">
                  <Button
                    variant="primary"
                    kind="elevated"
                    size="medium"
                    colorMode="light"
                  >
                    <div className="flex">
                      <p className="flex justify-center p-1 ">Git Repo</p>
                      <span className="flex justify-center p-1 ">
                        <img src={RIGHT_ARROW_ICON} alt="loading" />
                      </span>
                    </div>
                  </Button>
                </div>
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[75%] h-fit lg:flex lg:justify-center">
          <div className="w-[95%] p-2 m-1 h-[500px] rounded-md border border-dashed hover:bg-gray-700 cursor-pointer">
            <div className="flex justify-center m-1 p-1">
              <img
                src={CHAT_ICON}
                alt="loading"
                className="w-[95%] h-[300px] rounded-md border border-gray-400"
              />
            </div>
            <div className="flex justify-center m-1 p-1">
              <p className="text-2xl font-white text-white font-merienda font-bold">
                Only Friends
              </p>
            </div>
            <div className="flex justify-center m-1 p-1">
              <p className="text-[14px] text-gray-400 font-merienda text-center">
                a platform where you randomly get to talk to anyone based on
                your interest.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://github.com/Prajjwal98Dubey/Only-Friends"
                target="_blank"
              >
                <div className="hover:bg-red-400 p-1">
                  <Button
                    variant="primary"
                    kind="elevated"
                    size="medium"
                    colorMode="light"
                  >
                    <div className="flex">
                      <p className="flex justify-center p-1 ">Git Repo</p>
                      <span className="flex justify-center p-1 ">
                        <img src={RIGHT_ARROW_ICON} alt="loading" />
                      </span>
                    </div>
                  </Button>
                </div>
              </a>
            </div>
          </div>
          <div className="w-[95%] p-2 m-1 sm:h-[520px] lg:h-[500px] rounded-md border border-dashed hover:bg-gray-700 cursor-pointer">
            <div className="flex justify-center m-1 p-1">
              <img
                src={CMI_ICON}
                alt="loading"
                className="w-[95%] h-[300px] rounded-md border border-gray-400"
              />
            </div>
            <div className="flex justify-center m-1 p-1">
              <p className="text-2xl font-white text-white font-merienda font-bold">
                Check My Idea
              </p>
            </div>
            <div className="flex justify-center m-1 p-1">
              <p className="text-[14px] text-gray-400 font-merienda text-center">
                a platform in which someone puts the idea of their startup or
                projects and get instant feedback.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://github.com/Prajjwal98Dubey/Check-my-idea"
                target="_blank"
                className="z-10"
              >
                <div className="hover:bg-red-400 p-1">
                  <Button
                    variant="primary"
                    kind="elevated"
                    size="medium"
                    colorMode="light"
                  >
                    <div className="flex">
                      <p className="flex justify-center p-1 ">Git Repo</p>
                      <span className="flex justify-center p-1 ">
                        <img src={RIGHT_ARROW_ICON} alt="loading" />
                      </span>
                    </div>
                  </Button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center m-1 p-1">
        <a href="https://github.com/Prajjwal98Dubey/" target="_blank">
          <Button
            variant="primary"
            kind="elevated"
            size="medium"
            colorMode="light"
          >
            More Projects...
          </Button>
        </a>
      </div>
    </div>
  );
}

export default App;
