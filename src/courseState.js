// Import images
import react1 from "./img/react-1.jpg"
import react2 from "./img/react-2.jpg"
import js from "./img/js.png"
import js4 from "./img/js4.jpg"
import soon1 from "./img/soon-1.jpg"
import soon2 from "./img/soon-2.jpg"

export const courseState = () => {
    return [
        {
            title: "Interactive React and Redux",
            mainImg: react1,
            secondaryImg: react2,
            url: "/courses/react",
            awards: [
                {
                    title: "Lorem ipsum si",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, rem."
                },
                {
                    title: "Lorem ipsum si",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, rem."
                },
                {
                    title: "Lorem ipsum si",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, rem."
                }
            ]
        },
        {
            title: "Tez kunda",
            mainImg: soon1,
            secondaryImg: soon2,
            url: "/courses/soon",
            awards: [
                {
                    title: "Lorem ipsum si",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, rem."
                },
                {
                    title: "Lorem ipsum si",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, rem."
                },
                {
                    title: "Lorem ipsum si",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, rem."
                }
            ]
        },
        {
            title: "Interactive JavaScript",
            mainImg: js,
            secondaryImg: js4,
            url: "/courses/javascript",
            awards: [
                {
                    title: "Lorem ipsum si",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, rem."
                },
                {
                    title: "Lorem ipsum si",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, rem."
                },
                {
                    title: "Lorem ipsum si",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, rem."
                }
            ]
        }
    ]
}

