import React from "react";


const myskills = () => {
  return (
    <div className="w-full h-full flex flex-col mt-[70px] lg:mt-[70px] ">
      <div className="flex flex-col  text-md text-center w-full pb-[30px]">
        <h1 className="font-bold">MY SKILLS</h1>
        <p className="text-[14px] py-[10px]">My technical level</p>
      </div>
      {/* ------------------------------------------------------------------------------------------------------ */}
      <div className="flex-1 flex justify-center gap-x-10 gap-y-6  mb-[100px] lg:pt-[25px] flex-wrap ">
        <div className="flex-grow-5 w-[350px] h-[320px] dark:bg-[#151030] shadow-xl rounded-xl ">
          <div className="text-center pt-[15px]">
            <p className="font-semibold">Frontend Stack</p>
          </div>
          <div className="flex-1 flex mx-[20px] my-[25px]">
            <div className="flex-grow-5 w-[176.5px] px-4">
              <div className=" flex text-start py-4">
                <span>
                  <img src="./assets/html.png" className="w-[40px] h-[40px]" />
                </span>
                <span className="flex  flex-col">
                  <h1 className="px-[10px] text-sm">HTML</h1>
                  <p className="text-[12px] pl-[10px]">advanced</p>
                </span>
              </div>

              <div className=" flex text-start py-4">
                <span>
                  <img src="./assets/css.png" className="w-[40px] h-[40px]" />
                </span>
                <span className="flex  flex-col">
                  <h1 className="px-[10px] text-sm">CSS</h1>
                  <p className="text-[12px] pl-[10px]">intermidiate</p>
                </span>
              </div>

              <div className=" flex text-start py-4">
                <span>
                  <img
                    src="./assets/javascript.webp"
                    className="w-[40px] h-[40px] rounded-xl"
                  />
                </span>
                <span className="flex  flex-col">
                  <h1 className="px-[10px] text-sm">Javascript</h1>
                  <p className="text-[12px] pl-[10px]">intermidiate</p>
                </span>
              </div>
            </div>
            <div className="flex-grow-5  w-[176.5px] px-4">
              <div className=" flex text-start py-4">
                <span>
                  <img
                    src="./assets/Tailwind.webp"
                    className="w-[40px] h-[40px]"
                  />
                </span>
                <span className="flex  flex-col">
                  <h1 className="px-[10px] text-sm">Tailwind</h1>
                  <p className="text-[12px] pl-[10px]">basic</p>
                </span>
              </div>

              <div className=" flex text-start py-4">
                <span>
                  <img
                    src="./assets/React.webp"
                    className="w-[40px] h-[40px]"
                  />
                </span>
                <span className="flex  flex-col">
                  <h1 className="px-[10px] text-sm">React</h1>
                  <p className="text-[12px] pl-[10px]">intermidiate</p>
                </span>
              </div>

              <div className=" flex text-start py-4">
                <span>
                  <img src="./assets/Next.webp" className="w-[40px] h-[40px]" />
                </span>
                <span className="flex  flex-col">
                  <h1 className="px-[10px] text-sm">HTML</h1>
                  <p className="text-[12px] pl-[10px]">advanced</p>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------------------------------------------- */}

        <div className="flex-grow-5 w-[350px] h-[320px] dark:bg-[#151030] shadow-xl rounded-xl ">
          <div className="text-center pt-[15px]">
            <p className="font-semibold">Backend Stack</p>
          </div>
          <div className="flex-1 flex mx-[20px] my-[25px]">
            <div className="flex-grow-5 w-[176.5px] px-4">
              <div className=" flex text-start py-4">
                <span>
                  <img src="./assets/node.webp" className="w-[40px] h-[40px]" />
                </span>
                <span className="flex  flex-col">
                  <h1 className="px-[10px] text-sm">Nodejs</h1>
                  <p className="text-[12px] pl-[10px]">Basic</p>
                </span>
              </div>

              <div className=" flex text-start py-4">
                <span>
                  <img
                    src="./assets/SocketIo.webp"
                    className="w-[40px] h-[40px]"
                  />
                </span>
                <span className="flex  flex-col">
                  <h1 className="px-[10px] text-sm">Socket.IO</h1>
                  <p className="text-[12px] pl-[10px]">intermidiate</p>
                </span>
              </div>

              <div className=" flex text-start py-4">
                <span>
                  <img
                    src="./assets/Typescript.webp"
                    className="w-[40px] h-[40px] rounded-sm"
                  />
                </span>
                <span className="flex  flex-col">
                  <h1 className="px-[10px] text-sm">Typescript</h1>
                  <p className="text-[12px] pl-[10px]">Basic</p>
                </span>
              </div>
            </div>
            <div className="flex-grow-5  w-[176.5px] px-4">
              <div className=" flex text-start py-4">
                <span>
                  <img
                    src="./assets/mongo.webp"
                    className="w-[40px] h-[40px]"
                  />
                </span>
                <span className="flex  flex-col">
                  <h1 className="px-[10px] text-sm">MongoDB</h1>
                  <p className="text-[12px] pl-[10px]">intermidiate</p>
                </span>
              </div>

              <div className=" flex text-start py-4">
                <span>
                  <img
                    src="./assets/firebase.png"
                    className="w-[40px] h-[40px]"
                  />
                </span>
                <span className="flex  flex-col">
                  <h1 className="px-[10px] text-sm">Firebase</h1>
                  <p className="text-[12px] pl-[10px]">intermidiate</p>
                </span>
              </div>

              <div className=" flex text-start py-4">
                <span>
                  <img
                    src="./assets/appwrite.webp"
                    className="w-[40px] h-[40px]"
                  />
                </span>
                <span className="flex  flex-col">
                  <h1 className="px-[10px] text-sm">appwrite</h1>
                  <p className="text-[12px] pl-[10px]">Basic</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default myskills;
