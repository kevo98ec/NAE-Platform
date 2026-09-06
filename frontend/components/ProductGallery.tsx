"use client";

import { useState } from "react";

type ProductGalleryProps = {
    images: string[];
    video?: string;
};

type SelectedMedia =
    | {
          type: "image";
          src: string;
      }
    | {
          type: "video";
          src: string;
      };

export default function ProductGallery({
    images,
    video,
}: ProductGalleryProps) {
    const [selectedMedia, setSelectedMedia] =
        useState<SelectedMedia>({
            type: "image",
            src: images[0],
        });

    return (
        <div>
            <div className="bg-white rounded-2xl overflow-hidden">
                {selectedMedia.type === "image" ? (
                    <img
                        src={selectedMedia.src}
                        alt="Producto"
                        className="w-full h-[500px] object-contain p-8"
                    />
                ) : (
                    <video
                        src={selectedMedia.src}
                        controls
                        className="w-full h-[500px] object-contain p-8"
                    />
                )}
            </div>

            <div className="flex gap-3 mt-4">
                {images.map((image) => (
                    <button
                        key={image}
                        type="button"
                        onClick={() =>
                            setSelectedMedia({
                                type: "image",
                                src: image,
                            })
                        }
                        className={`w-20 h-20 bg-white rounded-xl overflow-hidden border-2 ${
                            selectedMedia.type === "image" &&
                            selectedMedia.src === image
                                ? "border-blue-600"
                                : "border-slate-200"
                        }`}
                    >
                        <img
                            src={image}
                            alt="Vista del producto"
                            className="w-full h-full object-contain"
                        />
                    </button>
                ))}

                {video && (
                    <button
                        type="button"
                        onClick={() =>
                            setSelectedMedia({
                                type: "video",
                                src: video,
                            })
                        }
                        className={`w-20 h-20 bg-slate-100 rounded-xl flex items-center justify-center text-2xl border-2 ${
                            selectedMedia.type === "video"
                                ? "border-blue-600"
                                : "border-slate-200"
                        }`}
                    >
                        🎥
                    </button>
                )}
            </div>
        </div>
    );
}