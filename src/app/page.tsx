import Image from "next/image";
import Password from "../lib/password";

const passTypes = 
  {
    id: 1,
    name: "short_pass",
    requirements: [
      {
        description: "Has a number 0-9",
        checked: false,
      },
      {
        description: "Has a special char !@#$%^&*",
        checked: false,
      },
      {
        description: "Has uppercase Letter",
        checked: false,
      },
    ],
  }
;
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Password number noConsecutiveLetter character uppercase />
    </main>
  );
}
