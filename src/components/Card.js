import React from "react";
import {FcLike} from "react-icons/fc"
const Card = () => {
    return (
        <div>
            <div>
                <img src={course.image.url}></img>

                <div>
                    <button>
                        <FcLike fontSize="1.75rem" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card