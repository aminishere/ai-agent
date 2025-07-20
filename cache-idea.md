Where is the Cache?
It’s a simple JavaScript object (responseCache) in the performRun.ts file.
The cache only exists in memory (RAM).
When is the Cache Used?
Before making an OpenAI API call, the cache is checked.
If a cached response exists, it’s used; otherwise, a new response is generated and cached.
Benefits
Reduces response time for repeated queries.
Lowers OpenAI API usage and costs.
Simple and easy to maintain.
