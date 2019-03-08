## Artillery .yml file
```
config:
  target: "http://localhost:8081"
  phases:
    - duration: 120 # total duration in seconds
      arrivalRate: 200 # number of users arriving per second
  processor: "./dataGenerator.js"
scenarios:
  - name: "GET request for a single house info"
    weight: 80
    flow:
      - get:
          url: "/api/properties/{{$randomNumber(1, 10000000)}}"

  - name: "POST request to save a single house record"
    weight: 20
    flow:
      - function: "generateRandomData"
      - post:
          url: "/post"
          json: 
            _id: "{{ _id }}"
            zestimationPrice: "{{ zestimationPrice }}"
            startPriceRange: "{{ startPriceRange }}"
            endPriceRange: "{{ endPriceRange }}"
            thirtyDayPriceChange: "{{ thirtyDayPriceChange }}"
            oneYearForcast: "{{ oneYearForcast }}"
            propertyLastSalePrice: "{{ propertyLastSalePrice }}" 
            propertLastSaleDate: "{{ propertLastSaleDate }}"
            comparableHomePrice: "{{ comparableHomePrice }}"
            marketAppreciationPrice: "{{ marketAppreciationPrice }}"
            localSalesAvg: "{{ localSalesAvg }}"
            sellDate: "{{ sellDate }}" 
            sellPrice: "{{ sellPrice }}"
            beds: "{{ beds }}" 
            baths: "{{ baths }}"
            sqft: "{{ sqft }}" 
            streetAddress: "{{ streetAddress }}" 
            priceSqft: "{{ priceSqft }}"
            saleToList: "{{ saleToList }}"
            url: "{{ url }}"
```

## Results

```
All virtual users finished
Summary report @ 15:48:36(-0800) 2019-03-07
  Scenarios launched:  24000
  Scenarios completed: 24000
  Requests completed:  24000
  RPS sent: 199.1
  Request latency:
    min: 1.9
    max: 1003.7
    median: 3.2
    p95: 124.8
    p99: 419
  Scenario counts:
    GET request for a single house info: 19203 (80.013%)
    POST request to save a single house record: 4797 (19.988%)
  Codes:
    200: 19203
    201: 4797
```

