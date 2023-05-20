export const filteringSearch = (areasDetails) => {
    if (areasDetails.search != null) {
        if (areasDetails.category != null ||
            areasDetails.type != null ||
            areasDetails.minPrice != null ||
            areasDetails.maxPrice != null ||
            areasDetails.infrastructure != null ||
            areasDetails.page != null) {
            return `search=${areasDetails.search}&`
        } else {
            return `search=${areasDetails.search}`
        }
    }
    return ''
}

export const filteringCategory = (areasDetails) => {
    if (areasDetails.category != null) {
        if (areasDetails.minPrice != null ||
            areasDetails.type != null ||
            areasDetails.maxPrice != null ||
            areasDetails.infrastructure != null ||
            areasDetails.page != null) {
            return `category=${areasDetails.category}&`
        } else {
            return `category=${areasDetails.category}`
        }
    }
    return ''
}


export const filteringType = (areasDetails) => {
    if (areasDetails.type != null) {
        if (areasDetails.minPrice != null ||
            areasDetails.maxPrice != null ||
            areasDetails.infrastructure != null ||
            areasDetails.page != null) {
            return `type=${areasDetails.type.join(',')}&`
        } else {
            return `type=${areasDetails.type.join(',')}`
        }
    }
    return ''
}


export const filteringMinPrice = (areasDetails) => {
    if (areasDetails.minPrice != null) {
        if (areasDetails.maxPrice != null ||
            areasDetails.infrastructure != null ||
            areasDetails.page != null) {
            return `price_min=${areasDetails.minPrice}&`
        } else {
            return `price_min=${areasDetails.minPrice}`
        }
    }
    return ''
}

export const filteringMaxPrice = (areasDetails) => {
    if (areasDetails.maxPrice != null) {
        if (areasDetails.infrastructure != null ||
            areasDetails.page != null) {
            return `price_max=${areasDetails.maxPrice}&`
        } else {
            return `price_max=${areasDetails.maxPrice}`
        }
    }
    return ''
}

export const filteringInfrastructure = (areasDetails) => {
    if (areasDetails.infrastructure != null) {
        if (areasDetails.page != null) {
            return `infrastructure=${areasDetails.infrastructure.join(',')}&`
        } else {
            return `infrastructure=${areasDetails.infrastructure.join(',')}`
        }
    }
    return ''
}

export const filteringPage = (areasDetails) => {
    if (areasDetails.page != null) {
        return `price_max=${areasDetails.maxPrice}`
    } else {
        return ``
    }
}


export const filteringMap = (areasDetails) => {
    if (areasDetails.search != null ||
        areasDetails.category != null ||
        areasDetails.type != null ||
        areasDetails.minPrice != null ||
        areasDetails.maxPrice != null ||
        areasDetails.infrastructure != null ||
        areasDetails.page != null) {
        return `?`
    } else {
        return ``
    }
}