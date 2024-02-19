const apiKey = '27oeBKlfFoLFIhagtrpiAQ==nk1AT4A6yb2oNs7B';

// Conversion functions
function cmToInches(cm) {
  return (cm * 0.393701).toFixed(1); // Convert cm to inches and round to 1 decimal place
}

function kgToPounds(kg) {
  return (kg * 2.20462).toFixed(1); // Convert kg to pounds and round to 1 decimal place
}

async function getDogs(name) {
  const response = await fetch(
    `https://api.api-ninjas.com/v1/dogs?name=${name}`,
    {
      headers: {
        'X-Api-Key': apiKey,
      },
    }
  );
  const data = await response.json();
  return data;
}

const form = document.querySelector('form');
form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the default form submission

  const loading = document.querySelector('#loading');
  const name = document.querySelector('#name').value;

  loading.style.display = 'block'; // Show loading indicator

  const dogs = await getDogs(name);

  loading.style.display = 'none'; // Hide loading indicator once data is fetched

  const results = document.querySelector('#results');
  results.innerHTML = ''; // Clear existing results

  if (dogs.length === 0) {
    // No results found
    results.innerHTML = '<p class="text-center">No search results found.</p>';
  } else {
    dogs.forEach((dog) => {
      const div = document.createElement('div');
      div.classList.add('card', 'mb-3');
      div.innerHTML = `
<div class="row no-gutters">
    <div class="col-md-4">
        <img src="${dog.image_link}" class="card-img" alt="${dog.name}">
    </div>
    <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${dog.name}</h5>
            <div class="row">
                <div class="col-6">
                    <p>Good with children: ${dog.good_with_children}</p>
                    <p>Good with other dogs: ${dog.good_with_other_dogs}</p>
                    <p>Shedding: ${dog.shedding}</p>
                    <p>Grooming: ${dog.grooming}</p>
                    <p>Drooling: ${dog.drooling}</p>
                </div>
                <div class="col-6">
                    <p>Coat length: ${dog.coat_length}</p>
                    <p>Good with strangers: ${dog.good_with_strangers}</p>
                    <p>Playfulness: ${dog.playfulness}</p>
                    <p>Protectiveness: ${dog.protectiveness}</p>
                    <p>Trainability: ${dog.trainability}</p>
                </div>
            </div>
            <div class="dog-data d-flex flex-wrap">
                <p class="w-50">Energy: ${dog.energy}</p>
                <p class="w-50">Barking: ${dog.barking}</p>
                <p class="w-50">Life expectancy: ${dog.min_life_expectancy} - ${
        dog.max_life_expectancy
      } years</p>
                <p class="w-50">Size (Male): ${cmToInches(
                  dog.min_height_male
                )} - ${cmToInches(dog.max_height_male)} inches</p>
                <p class="w-50">Size (Female): ${cmToInches(
                  dog.min_height_female
                )} - ${cmToInches(dog.max_height_female)} inches</p>
                <p class="w-50">Weight (Male): ${kgToPounds(
                  dog.min_weight_male
                )} - ${kgToPounds(dog.max_weight_male)} lbs</p>
                <p class="w-50">Weight (Female): ${kgToPounds(
                  dog.min_weight_female
                )} - ${kgToPounds(dog.max_weight_female)} lbs</p>
            </div>
        </div>
    </div>
</div>
      `;
      results.appendChild(div);
    });
  }
});
