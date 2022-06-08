import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '../../layouts/MainLayout';

export default function FirstPost() {
  return (
    <MainLayout>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Image src="/public/images/profile.jpg"
        height={144}
        width={144}
        alt="Your Name" />
    </MainLayout>
  );
}
