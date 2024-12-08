import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../../appWriter/config";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import CommonButton from "../../Components/Buttons/CommonButton";
import Container from "../../Components/container/Container";
import { startLoading, stopLoading } from "../../app/loadingSlice";
import Meta from "../../Components/Meta";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        dispatch(startLoading());
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                dispatch(stopLoading());
                if (post) setPost(post);
                else navigate("/");
            });
        } else {
            dispatch(stopLoading());
            navigate("/");
        }
    }, [slug, navigate]);

    const deletePost = () => {
        dispatch(startLoading());

        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage)
                    .then(() => {
                        dispatch(stopLoading());
                    });
                navigate("/all-posts");
            }
        });
    };

    return post ? (
        <div className="flex items-center justify-center m-2 rounded-[10px] border-gray-300 bg-white">
            <Meta />

            <Container className="flex-col w-[calc(90%)] p-2">
                {isAuthor && (
                    <div className="flex w-full gap-2 items-center justify-end">
                        <Link to={`/edit-post/${post.$id}`}>
                            <CommonButton className="px-5 bg-green-500 w-[150px]">
                                Edit Post
                            </CommonButton>
                        </Link>
                        <CommonButton className="px-5 bg-red-500 w-[100px]" onClick={deletePost}>
                            Delete
                        </CommonButton>
                    </div>
                )}

                <div className="w-full mb-4">
                    <h1 className="font-bold text-[20px]
                    laptop:text-[32px]">
                        {
                            post.title
                        }
                    </h1>
                </div>

                <div className="w-full flex justify-center relative m-2">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="max-h-[400px]" />
                </div>

                <div className="browser-css mt-2">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}