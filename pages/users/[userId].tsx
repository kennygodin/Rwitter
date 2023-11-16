import Header from '@/components/Header';
import PostFeed from '@/components/posts/PostFeed';
import UserBio from '@/components/users/UserBio';
import UsersHero from '@/components/users/UsersHero';
import useUser from '@/hooks/useUser';
import { useRouter } from 'next/router';
import { ClipLoader } from 'react-spinners';

const Userview = () => {
  const router = useRouter();
  const { userId } = router.query;

  const { data: fetchedUser, isLoading } = useUser(userId as string);

  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    );
  }
  return (
    <>
      <Header showBackArrow label={fetchedUser?.name} />
      <UsersHero userId={userId as string} />
      <UserBio userId={userId as string} />
      <PostFeed userId={userId as string} />
    </>
  );
};

export default Userview;
