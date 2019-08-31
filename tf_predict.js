// FileReader Function
function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#selected-image')
                    .attr('src', e.target.result)
                    .width(150)
                    .height(200);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

const img = document.getElementById('predict-button').onclick = function() {myFunction()};
function myFunction() {
const img = document.getElementById('selected-image')
// Load the model.
mobilenet.load().then(model => {
// Classify the image.
model.classify(img).then(predictions => {
    console.log('Predictions: ');
    console.log(predictions);
	document.getElementById("class").innerHTML = "Predicted Class: "+predictions[0].className;
	document.getElementById("probability").innerHTML = "Probability: "+ predictions[0].probability;
 
  });
});
}
