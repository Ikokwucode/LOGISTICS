// import Authentication from "../Auth/Authentication";
import Button from "../Components/Button";

function Home() {
  return (
    <main className=" w-[100%]">
      <section className=" grid place-content-center h-[100vh] w-screen bg-[url(/Images/courier.png)] bg-cover bg-center bg-no-repeat">
        <div className=" flex flex-col items-center justify-between h-[40vh] w-[60vw] font-Nunito text-center space-40">
          <h1 className=" font-bold text-6xl text-primary tracking-wide ">
            <span className="">Swift Delivery </span>
            <span className="text-white">
              at <br /> Your Fingertips
            </span>
          </h1>
          <p className="text-white text-sm font-normal font-sans">
            From groceries to household items, delivered to your door in no
            time.
          </p>
          <Button
            className="border-primary text-xl "
            text={"Get started"}
            width={"w-[20vw]"}
            bg={"bg-primary"}
          />
        </div>
      </section>
    </main>
  );
}

export default Home;
