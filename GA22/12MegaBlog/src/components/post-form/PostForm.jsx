import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    // const submit = async (data) => {
    //     if (post) {
    //         const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

    //         if (file) {
    //             appwriteService.deleteFile(post.featuredImage);
    //         }

    //         const dbPost = await appwriteService.updatePost(post.$id, {
    //             ...data,
    //             featuredImage: file ? file.$id : undefined,
    //         });

    //         if (dbPost) {
    //             navigate(`/post/${dbPost.$id}`);
    //         }
    //     } else {
    //         const file = await appwriteService.uploadFile(data.image[0]);

    //         if (file) {
    //             const fileId = file.$id;
    //             data.featuredImage = fileId;
    //             while (!userData || !userData.$id) {
    //                 await new Promise(resolve => setTimeout(resolve, 100)); // Wait for 100 milliseconds before checking again
    //             }
    //             const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });
    //             console.log(dbPost);
            

    //             if (dbPost) {
    //                 navigate(`/post/${dbPost.$id}`);
    //             }
    //         }
            
    //     }
    // };

    // const submit = async (data) => {
    //     const imageFile = data.image[0]; // Added to get the image file from form data
    
    //     // Check if an image file is provided
    //     if (imageFile) {
    //         // Create an image object to get the dimensions
    //         const image = new Image();
    //         const imageUrl = URL.createObjectURL(imageFile);
            
    //         // Create a promise to await image loading
    //         const loadImage = new Promise((resolve, reject) => {
    //             image.onload = () => resolve({ width: image.width, height: image.height });
    //             image.onerror = reject;
    //         });
    
    //         // Load the image and get its dimensions
    //         image.src = imageUrl;
    //         const { width, height } = await loadImage;
    
    //         // Check image resolution (adjust as needed)
    //         const minWidth = 50; // Minimum width allowed
    //         const minHeight = 50; // Minimum height allowed
    //         if (width < minWidth || height < minHeight) {
    //             alert("Image resolution must be at least 100x100 pixels."); // Added to alert the user if image resolution is not sufficient
    //             return; // Added to stop further execution if image resolution is not sufficient
    //         }
    //     }
    
    //     // Proceed with form submission
    //     if (post) {
    //         const file = imageFile ? await appwriteService.uploadFile(imageFile) : null;
    
    //         if (file) {
    //             appwriteService.deleteFile(post.featuredImage);
    //         }
    
    //         const dbPost = await appwriteService.updatePost(post.$id, {
    //             ...data,
    //             featuredImage: file ? file.$id : undefined,
    //         });
    
    //         if (dbPost) {
    //             navigate(`/post/${dbPost.$id}`);
    //         }
    //     } else {
    //         const file = await appwriteService.uploadFile(imageFile);
    
    //         if (file) {
    //             const fileId = file.$id;
    //             data.featuredImage = fileId;
    //             while (!userData || !userData.$id) {
    //                 await new Promise(resolve => setTimeout(resolve, 100)); // Wait for 100 milliseconds before checking again
    //             }
    //             const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });
    
    //             if (dbPost) {
    //                 navigate(`/post/${dbPost.$id}`);
    //             }
    //         }
    //     }
    // };
    // const submit = async (data) => {
    //     const imageFile = data.image[0]; // Added to get the image file from form data
    
    //     // Check if an image file is provided
    //     if (imageFile) {
    //         // Create an image object to get the dimensions
    //         const image = new Image();
    //         const imageUrl = URL.createObjectURL(imageFile);
            
    //         // Create a promise to await image loading
    //         const loadImage = new Promise((resolve, reject) => {
    //             image.onload = () => resolve({ width: image.width, height: image.height });
    //             image.onerror = reject;
    //         });
    
    //         // Load the image and get its dimensions
    //         image.src = imageUrl;
    //         const { width, height } = await loadImage;
    
    //         // Check image resolution (adjusted for 50x50 pixels)
    //         const minWidth = 50; // Minimum width allowed
    //         const minHeight = 50; // Minimum height allowed
    //         if (width <= minWidth || height <= minHeight) {
    //             alert("Image resolution must be exactly 50x50 pixels.");
    //             return; // Stop further execution if image resolution is not correct
    //         }
    //     }
    
    //     // Proceed with form submission
    //     if (post) {
    //         const file = imageFile ? await appwriteService.uploadFile(imageFile) : null;
    
    //         if (file) {
    //             appwriteService.deleteFile(post.featuredImage);
    //         }
    
    //         const dbPost = await appwriteService.updatePost(post.$id, {
    //             ...data,
    //             featuredImage: file ? file.$id : undefined,
    //         });
    
    //         if (dbPost) {
    //             navigate(`/post/${dbPost.$id}`);
    //         }
    //     } else {
    //         const file = await appwriteService.uploadFile(imageFile);
    
    //         if (file) {
    //             const fileId = file.$id;
    //             data.featuredImage = fileId;
    //             while (!userData || !userData.$id) {
    //                 await new Promise(resolve => setTimeout(resolve, 100)); // Wait for 100 milliseconds before checking again
    //             }
    //             const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });
    
    //             if (dbPost) {
    //                 navigate(`/post/${dbPost.$id}`);
    //             }
    //         }
    //     }
    // };
    const submit = async (data) => {
        const imageFile = data.image[0]; // Added to get the image file from form data
    
        // Check if an image file is provided
        if (imageFile) {
            // Create an image object to get the dimensions
            const image = new Image();
            const imageUrl = URL.createObjectURL(imageFile);
            
            // Create a promise to await image loading
            const loadImage = new Promise((resolve, reject) => {
                image.onload = () => resolve({ width: image.width, height: image.height });
                image.onerror = reject;
            });
    
            // Load the image and get its dimensions
            image.src = imageUrl;
            const { width, height } = await loadImage;
    
            // Check image resolution (adjusted for 50x50 pixels)
            const minWidth = 50; // Minimum width allowed
            const minHeight = 50; // Minimum height allowed
            if (width <= minWidth || height <= minHeight) {
                alert("Image resolution must be exactly 50x50 pixels.");
                return; // Stop further execution if image resolution is not correct
            }
        }
    
        // Proceed with form submission
        if (post) {
            const file = imageFile ? await appwriteService.uploadFile(imageFile) : null;
    
            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }
    
            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });
    
            if (dbPost) {
                // Show success notification
                alert("Post updated successfully!");
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await appwriteService.uploadFile(imageFile);
    
            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                while (!userData || !userData.$id) {
                    await new Promise(resolve => setTimeout(resolve, 100)); // Wait for 100 milliseconds before checking again
                }
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });
    
                if (dbPost) {
                    // Show success notification
                    alert("Post created successfully!");
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };
    
    
    

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}
