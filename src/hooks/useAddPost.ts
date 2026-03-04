import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addPost } from "../api/posts"

  export const useAddPost = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: addPost,
        onSuccess: (data) => {console.log(data), queryClient.invalidateQueries({queryKey: ["users"]})},
        onError: (err: any) => console.log(err)
    })
  }
