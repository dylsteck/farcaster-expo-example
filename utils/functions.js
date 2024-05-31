export const filterFeedBasedOnFID = (feed, lower_limit_feed, upper_limit_feed) => {
    if (upper_limit_feed === 0) {
        return feed
    }
    if (!feed || feed.length === 0) {
        return [];
    }
    return feed.filter((item) => item?.author?.fid >= lower_limit_feed && item?.author?.fid <= upper_limit_feed);
}

const getChannelIdFromUrl = (channelUrl = "") => {
    // "parent_url": "https://warpcast.com/~/channel/degentokenbase"
    if (!channelUrl) {
        return null
    }
    const channelId = channelUrl.split('/').pop()
    return channelId
}

export const filterCastsBasedOnChannels = (casts, channels) => {
    return casts.filter((cast) => channels.includes(getChannelIdFromUrl(cast?.parent_url)))
}

export const filterCastsToMute = (casts, mutedChannels) => {
    return casts.filter((cast) => !mutedChannels.includes(getChannelIdFromUrl(cast?.parent_url)))
}