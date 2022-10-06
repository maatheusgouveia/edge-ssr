import { GetServerSideProps } from "next";

export default function Home() {
  return <div>Hello</div>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const users = ["Matheus", "Diego", "Mayk", "João"];

  return {
    props: {
      users,
    },
  };
};
