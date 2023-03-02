const getTweetData = require("../getTweetData")

describe("getTweetData tests", () => {
    test("return an object with the correct keys when passed an empty string", () => {
    
        expect(getTweetData("")).toEqual({tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 0})
    })
    test("return an object containing the correct length of the string passed in", () => {
        const hello = getTweetData("hello")
        const helloName = getTweetData("hello my name is")
        expect(hello.length).toBe(5)
        expect(helloName.length).toBe(16)    
    })
    test("return an object containing the correct amount of hashtags", () => {
        const tweetData = getTweetData("#hello")
        expect(tweetData.tagCount).toBe(1)
        expect(tweetData.length).toBe(6)
    })
    test("return an object containing an array of all the unique hashtags", () => {
        const hashtagOne = getTweetData("#hello")
        const hashtagTwo = getTweetData("#hello #goodbye")
        const hashtagThree = getTweetData("#hello #goodbye #hello")
        expect(hashtagOne.tags).toEqual(["#hello"])
        expect(hashtagTwo.tags).toEqual(["#hello", "#goodbye"])
        expect(hashtagThree.tags).toEqual(["#hello","#goodbye"])
    })
    test("return an object containing the correct amount of mentions", () => {
        const tweetData = getTweetData("@hello")
        expect(tweetData.mentionCount).toBe(1)
        expect(tweetData.length).toBe(6)
    })
    test("return an object containing an array of all the unique hashtags", () => {
        const mentionOne = getTweetData("@hello")
        const mentionTwo = getTweetData("@hello @goodbye")
        const mentionThree = getTweetData("@hello @goodbye @hello")
        expect(mentionOne.mentions).toEqual(["@hello"])
        expect(mentionTwo.mentions).toEqual(["@hello", "@goodbye"])
        expect(mentionThree.mentions).toEqual(["@hello","@goodbye"])
    })
    test("returns an object containing all the correct keys and values when passed a long tweet", () => {
        const tweet = "hello my #name is @misc and i #like to eat #apples at @Northcoders I really #like pie too"
       
        const expected = {tags: ["#name", "#like", "#apples"], mentions: ["@misc", "@Northcoders"], tagCount: 4, mentionCount: 2, length: 89}
        expect(getTweetData(tweet)).toEqual(expected)
    })
})