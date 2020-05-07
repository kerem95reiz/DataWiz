
// data : {clusters: [], raw: []}
export function prepareData(categories, data) {

    Object.keys(data).forEach(category => {
        data[category].forEach((dataPoint, index) => {
            var tempDataPoint = {}
            categories.map((dimension, index) => {
                tempDataPoint[dimension] = dataPoint[index]
            })
            data[category][index] = tempDataPoint
            tempDataPoint = {}
        })
    });
    return data
}

// data: {cluster: [], raw: []}
// categories: [...]
// return { 'traffic': [{..},], 'io': [{..},] }
export function forLine(categories, data) {
    // TODO: create a property for each category
    // {traffic: .., ..: ..}
    // Extract the datapoints for that property 

    // assign an array to each category property
    // create a dic for each data form (raw vs clustered)
    // put an id and data property to the data form dic

    var forLineTransformedData = {}

    for (const category of categories) {
        forLineTransformedData[category] = getTransformedData(category, data)
    }
    return forLineTransformedData
}

function getTransformedData(category, data) {
    var dataInThisCatefory = []
    var dataStates = Object.keys(data)
    for (const state of dataStates) {
        var tempData = []
        var counter = 0
        for (const dataPoint of data[state]) {
            tempData.push({
                "x": counter,
                "y": dataPoint[category]
            })
            counter += 1
        }
        dataInThisCatefory.push({
            "id": state,
            "color": "rgb(0, 0, 0)",
            "data": tempData
        })
    }
    return dataInThisCatefory
}

// clusterData: []
// dimensions: [..].length == 2
export function forScatter(dimensions, clusterData, weights) {
    if (dimensions.length !== 2) throw new Error('not 2 dimensional')
    var first_dim = dimensions[0]
    var second_dim = dimensions[1]
    var scatter = {
        id: 'microclusters',
        data: []
    }

    var index = 0
    for (const x of clusterData) {
        scatter.data.push({
            x: x[first_dim],
            y: x[second_dim],
            radius: weights[index]
        })
        index += 1
    }
    return scatter
}

export default { prepareData }