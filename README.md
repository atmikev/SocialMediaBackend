# SocialMediaBackend

## The Problem
Need to return social media data in a reasonable amount of time. To do that, I've decided to take the simplest route and simply request all 3 endpoints together and send a response once the data has come back.

### Technical Decisions
The implementation I chose is a fairly naive one, but meets the requirements as is. Becuase we're handling multiple requests in an asynchronous environment, I decided to use some of the async/await functionality to ensure that all my responses came back before sending off the response to the client.

I chose to use Node (which I've only used a couple times before) becuase of the simplicity it affords in rapid prototyping. Being able to massage my solution various ways without having to do refactoring on models was nice. I did get less further than I'd hoped though because some of the more complex things I was interested in implementing (which I'll get to in a sec) doesn't come free with Express.

I also chose bare minimum error handling. If the endpoint threw an error, I wanted to make sure the response would still have an appropriate value, so I decided to go with an empty array.

## If I Had More Time:

The way I interpreted needed "everything, now", was with the typical dev question ("do you really?"). In the real world this would have been more of a conversation to determine a "good enough" latency. 

If the data was truly needed instantaneously, I would have set up sockets and fed the response data immediately as I received the requests. 

If it was needed "pretty fast" but not instantaneously, I'd probably have implemented an "registerForSocialMediaUpdates" (and corresponding "unregister...") endpoint with `callbackURL` and `pollInterval` params so that we could setup a long-running task that polls the endpoints every `pollInterval`, then fires back results when they're received (for each individual social media endpoint or all of them batched together).

## Other Stuff
[iOS demo utilizing the Yelp API](https://github.com/atmikev/YelpSearchDemo)
[A D&D character creation side project I've been working on](https://github.com/atmikev/squire)
[Resume](https://docs.google.com/document/d/1w-604k_DhAxreM7rInAyZ_p35SmFCj1aVCpT_5W8kqQ/edit?usp=sharing)