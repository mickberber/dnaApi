var data = [
  {"sequence":"acataaagtccttcgcgc","sequenceLength":18,"features":[{"name":"Ribosome Binding Site","index":2}]},
  {"sequence":"cgtgtttctatccgct","sequenceLength":16,"features":[{"name":"Promoter1","index":12},{"name":"Ribosome Binding Site","index":2},{"name":"Promoter2","index":10}]},
  {"sequence":"tcgccggccgggtcctatcgggtcagatgccggagtaccccgcaga","sequenceLength":46,"features":[{"name":"Ribosome Binding Site","index":30},{"name":"Promoter1","index":9},{"name":"Restriction Site 1","index":6},{"name":"Ribosome Binding Site","index":33},{"name":"Promoter2","index":0},{"name":"Promoter2","index":36}]},
  {"sequence":"cacagcggtattgaagcgaccgaccattacgcgtcgtcaccagtgcagactcc","sequenceLength":53,"features":[{"name":"Restriction Site 1","index":2},{"name":"Promoter1","index":49},{"name":"Ribosome Binding Site","index":24},{"name":"Restriction Site 1","index":5}]},
]


module.exports = {
  retrieveOne: function() {
    var index = Math.floor(Math.random() * data.length);
    return data[index];
  }
};
