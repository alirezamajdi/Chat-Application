export const setTokenWithExpiry = (key, value, ttl) => {
    const now = new Date()
    const item = {
        value: value,
        expiry: now.getTime() + ttl,
    }
    localStorage.setItem(key, JSON.stringify(item))
}

export const getTokenWithExpiry = (key) => {
    const itemStr = localStorage.getItem(key)
    if (!itemStr) {
        return null
    }
    const item = JSON.parse(itemStr)
    const now = new Date()
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key)
        window.location.reload(false);
        return null
    }
    return item.value
}

export const clearToken = () => {
    localStorage.clear()
    window.location.href = "/"
}

