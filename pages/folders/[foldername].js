import { useRouter } from "next/router";

const Folder = () => {
  const router = useRouter();
  const temp = router.query; // Destructuring our router object
  console.log(temp)

  return (
    <>
      <h2>
        Temp
      </h2>
    </>
  );
};

export default Folder;