### Running a random server
 1. Run the install command
```javascript
npm install
```
2. Make sure you have **Apache Benchmark** installed.
`brew install apache2`

3. Make run the server `node main.js`

4. Open up another session in your terminal and run `curl -v http://localhost:8000` to hit the server and verify it runs correctly.

5. Open up another session and run the following: 
```bash
ab -n 10000 -c 300 -H "Accept-Encoding: gzip, deflate" -rk http://localhost:8000/ 
```
This will run 10000 requests at 300 concurrent requests at a time and verify that each on is being hit properly and the speed etc etc.
