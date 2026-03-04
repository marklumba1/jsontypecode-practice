import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "./api/posts";
import { useAddPost } from "./hooks/useAddPost";

const App: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const postMutation = useAddPost();

  if (isLoading) return <p>Loading</p>;
  if (error)
    return (
      <p>
        {error.message}
        {error.name}
      </p>
    );

  const handleClick = async () => {
    postMutation.mutate({ id: 1000, title: "string" });
  };
  return (
    <div>
      <button onClick={handleClick} disabled={postMutation.isPending}>
        {postMutation.isPending ? "Adding" : "Add Post"}
      </button>
      {postMutation.error && <p>Error adding user</p>}
      {data?.length ? (
        data.map((post) => (
          <p key={post.id}>
            {post.id}: {post.title}
          </p>
        ))
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
};

export default App;
