import subprocess

# Boilerplate function - include this in every test below!
def prepare_and_assert(input_array, output_array):
    # Prepare Variables
    input_string = '\n'.join(input_array)
    input_data = input_string.encode('utf-8')
    expected_output = '\n'.join(output_array)

    # Get Actual Output from Input Data
    output_data = subprocess.run(['python', 'main.py'], input=input_data, stdout=subprocess.PIPE)
    output_bytes = output_data.stdout.strip()
    output_string = output_bytes.decode("utf-8")

    # Test if Expected Output is found in Actual Output
    assert expected_output in output_string

# Test 1
def test_overwhelmed():
    # Inputs
    input_array = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'overwhelmed'
    ]

    # Outputs
    output_array = [
        'They feel overwhelmed but are determined to complete the course.'
    ]

    # Test if Input results in Output
    prepare_and_assert(input_array, output_array)

# Test 2
def test_food_pizza_chips():
    # Inputs
    input_array = [
        'a',
        'b',
        'c',
        'd',
        'pizza',
        'chips',
        'g'
    ]

    # Outputs
    output_array = [
        'For lunch they have pizza and chips while reviewing their notes.'
    ]

    # Test if Input results in Output
    prepare_and_assert(input_array, output_array)

# Test 3
def test_food_salad_chicken():
    # Inputs
    input_array = [
        'a',
        'b',
        'c',
        'd',
        'salad',
        'chicken',
        'g'
    ]

    # Outputs
    output_array = [
        'For lunch they have salad and chicken while reviewing their notes.'
    ]

    # Test if Input results in Output
    prepare_and_assert(input_array, output_array)

# Test 4
def test_tomato_tomato_tomato():
    # Inputs
    input_array = [
        'tomato',
        'tomato',
        'tomato',
        'tomato',
        'tomato',
        'tomato',
        'tomato'
    ]

    # Outputs
    output_array = [
        'tomato started their first Generation course today. They are training as a tomato. They found their cohort to be very tomato but their teacher was, at least, tomato. For lunch they have tomato and tomato while reviewing their notes. They feel tomato but are determined to complete the course.'
    ]

    # Test if Input results in Output
    prepare_and_assert(input_array, output_array)

# Test 5
def test_job_programmer():
    # Inputs
    input_array = [
        'a',
        'Programmer',
        'c',
        'd',
        'e',
        'f',
        'g'
    ]

    # Outputs
    output_array = [
        'They are training as a Programmer.'
    ]

    # Test if Input results in Output
    prepare_and_assert(input_array, output_array)

# Test 6
def test_job_car_mechanic():
    # Inputs
    input_array = [
        'a',
        'Car Mechanic',
        'c',
        'd',
        'e',
        'f',
        'g'
    ]

    # Outputs
    output_array = [
        'They are training as a Car Mechanic.'
    ]

    # Test if Input results in Output
    prepare_and_assert(input_array, output_array)

# Test 7
def test_name_peter():
    # Inputs
    input_array = [
        'Peter',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g'
    ]

    # Outputs
    output_array = [
        'Peter started their first Generation course today.'
    ]

    # Test if Input results in Output
    prepare_and_assert(input_array, output_array)

# Test 8
def test_name_john():
    # Inputs
    input_array = [
        'John',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g'
    ]

    # Outputs
    output_array = [
        'John started their first Generation course today.'
    ]

    # Test if Input results in Output
    prepare_and_assert(input_array, output_array)

# Test 9
def test_adjective_quiet_loud():
    # Inputs
    input_array = [
        'a',
        'b',
        'quiet',
        'loud',
        'e',
        'f',
        'g'
    ]

    # Outputs
    output_array = [
        'They found their cohort to be very quiet but their teacher was, at least, loud.'
    ]

    # Test if Input results in Output
    prepare_and_assert(input_array, output_array)

# Test 10
def test_adjective_drole_funny():
    # Inputs
    input_array = [
        'a',
        'b',
        'drole',
        'funny',
        'e',
        'f',
        'g'
    ]

    # Outputs
    output_array = [
        'They found their cohort to be very drole but their teacher was, at least, funny.'
    ]

    # Test if Input results in Output
    prepare_and_assert(input_array, output_array)
