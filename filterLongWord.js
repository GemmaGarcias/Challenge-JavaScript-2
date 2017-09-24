filterLongWord(aWords,number){
	return aWords.filter(function(word){
	return word.length>number
	})
}
filterLongWord(['gfdgdsgd','hf','hdswdas'],5)

