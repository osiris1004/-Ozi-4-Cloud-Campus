import React from "react";

export const Footer = () => {
  return (
    <div className="flex justify-center bg-slate-500 py-5">
      <div className="border-0 w-[80%]">
        <div className="border-0  flex-1 flex justify-center flex-wrap ">
          <div className="border-0 md:w-[20%] m-2">
            <img
              alt="cloud campus"
              width={50}
              src="https://cloudcampuspro.com/home/img/logocampus.png"
            />

            <p className="py-5 text-gray-400">
            Nous regroupons les cours de nombreuses universités pour vous aider à trouver le
              meilleurs cours sur presque tous les sujets, où qu'ils existent.
            </p>
          </div>

          <div className="border-0 md:w-[20%] m-2 flex md:justify-center">
           <div>
           <p className="text-[100%] font-bold py-2 text-white">Contacts</p>
            <p className="pb-0 text-gray-400">Lun – Ven : 8h00 18h00</p>
            <p className="pb-0 text-gray-400">75010 Paris</p>
            <p className="pb-0 text-gray-400">(+33) 666-66-66-66</p>
            <p className="py-0 text-green-300">cloud-campus@cloudc.fr</p>
           </div>
          </div>

          <div className="border-0 md:w-[20%] m-2 flex md:justify-center">
            <div>
            <p className="text-[100%] font-bold py-2 text-white">Contacts</p>
            <p className="pb-0 text-gray-400">Courses</p>
            <p className="pb-0 text-gray-400">Training</p>
            <p className="pb-0 text-gray-400">Careers</p>
            <p className="py-0 text-green-300">Pricing</p>
            </div>
          </div>
        </div>
        <div className="flex pt-10">
          <div className="flex-1">Copyright Tous droits réservés 2022, Osiris Kontchou</div>
          <div className="flex">
            <img
            className="mx-2"
              alt="cloud campus"
              width={20}
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjIuNjc1IDBoLTIxLjM1Yy0uNzMyIDAtMS4zMjUuNTkzLTEuMzI1IDEuMzI1djIxLjM1MWMwIC43MzEuNTkzIDEuMzI0IDEuMzI1IDEuMzI0aDExLjQ5NXYtOS4yOTRoLTMuMTI4di0zLjYyMmgzLjEyOHYtMi42NzFjMC0zLjEgMS44OTMtNC43ODggNC42NTktNC43ODggMS4zMjUgMCAyLjQ2My4wOTkgMi43OTUuMTQzdjMuMjRsLTEuOTE4LjAwMWMtMS41MDQgMC0xLjc5NS43MTUtMS43OTUgMS43NjN2Mi4zMTNoMy41ODdsLS40NjcgMy42MjJoLTMuMTJ2OS4yOTNoNi4xMTZjLjczIDAgMS4zMjMtLjU5MyAxLjMyMy0xLjMyNXYtMjEuMzVjMC0uNzMyLS41OTMtMS4zMjUtMS4zMjUtMS4zMjV6Ii8+PC9zdmc+"
            />

            <img
             className="mx-2"
              alt="cloud campus"
              width={20}
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNC45OCAzLjVjMCAxLjM4MS0xLjExIDIuNS0yLjQ4IDIuNXMtMi40OC0xLjExOS0yLjQ4LTIuNWMwLTEuMzggMS4xMS0yLjUgMi40OC0yLjVzMi40OCAxLjEyIDIuNDggMi41em0uMDIgNC41aC01djE2aDV2LTE2em03Ljk4MiAwaC00Ljk2OHYxNmg0Ljk2OXYtOC4zOTljMC00LjY3IDYuMDI5LTUuMDUyIDYuMDI5IDB2OC4zOTloNC45ODh2LTEwLjEzMWMwLTcuODgtOC45MjItNy41OTMtMTEuMDE4LTMuNzE0di0yLjE1NXoiLz48L3N2Zz4="
            />

            <img
             className="mx-2"
              alt="cloud campus"
              width={20}
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMmM1LjUxNCAwIDEwIDQuNDg2IDEwIDEwcy00LjQ4NiAxMC0xMCAxMC0xMC00LjQ4Ni0xMC0xMCA0LjQ4Ni0xMCAxMC0xMHptMC0yYy02LjYyNyAwLTEyIDUuMzczLTEyIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyem02LjUgOC43NzhjLS40NDEuMTk2LS45MTYuMzI4LTEuNDE0LjM4OC41MDktLjMwNS44OTgtLjc4NyAxLjA4My0xLjM2Mi0uNDc2LjI4Mi0xLjAwMy40ODctMS41NjQuNTk3LS40NDgtLjQ3OS0xLjA4OS0uNzc4LTEuNzk2LS43NzgtMS41OSAwLTIuNzU4IDEuNDgzLTIuMzk5IDMuMDIzLTIuMDQ1LS4xMDMtMy44Ni0xLjA4My01LjA3NC0yLjU3Mi0uNjQ1IDEuMTA2LS4zMzQgMi41NTQuNzYyIDMuMjg3LS40MDMtLjAxMy0uNzgyLS4xMjQtMS4xMTQtLjMwOC0uMDI3IDEuMTQuNzkxIDIuMjA3IDEuOTc1IDIuNDQ1LS4zNDYuMDk0LS43MjYuMTE2LTEuMTEyLjA0Mi4zMTMuOTc4IDEuMjI0IDEuNjg5IDIuMyAxLjcwOS0xLjAzNy44MTItMi4zNCAxLjE3NS0zLjY0NyAxLjAyMSAxLjA5LjY5OSAyLjM4MyAxLjEwNiAzLjc3MyAxLjEwNiA0LjU3MiAwIDcuMTU0LTMuODYxIDYuOTk4LTcuMzI0LjQ4Mi0uMzQ2Ljg5OS0uNzggMS4yMjktMS4yNzR6Ii8+PC9zdmc+"
            />

            <img
             className="mx-2"
              alt="cloud campus"
              width={20}
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMmM1LjUxNCAwIDEwIDQuNDg2IDEwIDEwcy00LjQ4NiAxMC0xMCAxMC0xMC00LjQ4Ni0xMC0xMCA0LjQ4Ni0xMCAxMC0xMHptMC0yYy02LjYyNyAwLTEyIDUuMzczLTEyIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyem0wIDcuMDgyYzEuNjAyIDAgMS43OTIuMDA2IDIuNDI1LjAzNSAxLjYyNy4wNzQgMi4zODUuODQ1IDIuNDYgMi40NTkuMDI4LjYzMy4wMzQuODIyLjAzNCAyLjQyNHMtLjAwNiAxLjc5Mi0uMDM0IDIuNDI0Yy0uMDc1IDEuNjEzLS44MzIgMi4zODYtMi40NiAyLjQ2LS42MzMuMDI4LS44MjIuMDM1LTIuNDI1LjAzNS0xLjYwMiAwLTEuNzkyLS4wMDYtMi40MjQtLjAzNS0xLjYzLS4wNzUtMi4zODUtLjg0OS0yLjQ2LTIuNDYtLjAyOC0uNjMyLS4wMzUtLjgyMi0uMDM1LTIuNDI0cy4wMDctMS43OTIuMDM1LTIuNDI0Yy4wNzQtMS42MTUuODMyLTIuMzg2IDIuNDYtMi40Ni42MzItLjAyOS44MjItLjAzNCAyLjQyNC0uMDM0em0wLTEuMDgyYy0xLjYzIDAtMS44MzMuMDA3LTIuNDc0LjAzNy0yLjE4LjEtMy4zOSAxLjMwOS0zLjQ5IDMuNDg5LS4wMjkuNjQxLS4wMzYuODQ1LS4wMzYgMi40NzQgMCAxLjYzLjAwNyAxLjgzNC4wMzYgMi40NzQuMSAyLjE3OSAxLjMxIDMuMzkgMy40OSAzLjQ5LjY0MS4wMjkuODQ0LjAzNiAyLjQ3NC4wMzYgMS42MyAwIDEuODM0LS4wMDcgMi40NzUtLjAzNiAyLjE3Ni0uMSAzLjM5MS0xLjMwOSAzLjQ4OS0zLjQ5LjAyOS0uNjQuMDM2LS44NDQuMDM2LTIuNDc0IDAtMS42MjktLjAwNy0xLjgzMy0uMDM2LTIuNDc0LS4wOTgtMi4xNzctMS4zMDktMy4zOS0zLjQ4OS0zLjQ4OS0uNjQxLS4wMy0uODQ1LS4wMzctMi40NzUtLjAzN3ptMCAyLjkxOWMtMS43MDEgMC0zLjA4MSAxLjM3OS0zLjA4MSAzLjA4MXMxLjM4IDMuMDgxIDMuMDgxIDMuMDgxIDMuMDgxLTEuMzc5IDMuMDgxLTMuMDgxYzAtMS43MDEtMS4zOC0zLjA4MS0zLjA4MS0zLjA4MXptMCA1LjA4MWMtMS4xMDUgMC0yLS44OTUtMi0yIDAtMS4xMDQuODk1LTIgMi0yIDEuMTA0IDAgMi4wMDEuODk1IDIuMDAxIDJzLS44OTcgMi0yLjAwMSAyem0zLjIwMi01LjkyMmMtLjM5NyAwLS43Mi4zMjItLjcyLjcyIDAgLjM5Ny4zMjIuNzIuNzIuNzIuMzk4IDAgLjcyMS0uMzIyLjcyMS0uNzIgMC0uMzk4LS4zMjItLjcyLS43MjEtLjcyeiIvPjwvc3ZnPg=="
            />
          </div>
        </div>
      </div>
    </div>
  );
};
