
export let Parent = {
    hidden: {
    },
    show: {
        transition: {
            duration: 0.75,
            delay: 0.5,
            staggerChildren: 0.2,
            delayChildren: 0.1
        },
    }
}
export let leftStyle = {
    hidden: {
        x: '-100%',
        opacity: 0
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.95,
            ease: "easeOut"
        }
    }
}
export let rightStyle = {
    hidden: {
        x: '100%',
        opacity: 0
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.95,
            ease: "easeOut"
        }
    }
}
export let TopStyle = {
    hidden: {
        y: '-100%',
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.2,
        }
    }
}