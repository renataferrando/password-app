import Password from "../lib/password";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Password 
        number 
        noConsecutiveLetter 
        character 
        uppercase 
      />
    </main>
  );
}
