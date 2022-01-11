const courseScheme = {
    title: '',
    slug: '',
    description: '',
    image: '',
    code: '',
    pricing: {
        type: 'free',
        amount: 0
    },
    certificate: {
        content: {},
        background: '',
    },
    seo: {
        title: '',
        description: '',
        image: ''
    }
};

export function normalizeCourse(course) {
    return Object.freeze({
        ...courseScheme,
        ...course
    });
}

export function normalizeCourses(courses) {
    const normalized = courses.map((c) => normalizeCourse(c));
    return Object.freeze(normalized);
}