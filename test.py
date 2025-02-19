import subprocess

# Boilerplate function - include this in every test below!
def prepare_and_assert(input_array, output_array):
    # Prepare Variables
    expected_output = '\n'.join(output_array)

    # Get Actual Output 
    output_data = subprocess.run(['node', 'index.js'] + input_array, stdout=subprocess.PIPE)
    output_bytes = output_data.stdout.strip()
    output_string = output_bytes.decode("utf-8")

    # Test if Expected Output is found in Actual Output
    assert expected_output in output_string

# Test 1
def test_task_one():
    # Inputs
    input_array = [
        '1'
    ]

    # Outputs
    output_array = [
        "{ body: 'success' }"
    ]

    prepare_and_assert(input_array, output_array)

# Test 2
def test_task_two():
    # Inputs
    input_array = [
        '2'
    ]

    # Outputs
    output_array = [
        "[",
        "{",
        "  id: 1,",
        "  first_name: 'Joshua',",
        "  last_name: 'Diaz',",
        "  email: 'j3@example.com'",
        "},",
        "{",
        "  id: 2,",
        "  first_name: 'Song',",
        "  last_name: 'Gonzalez',",
        "  email: 'sgo@example.com'",
        "},",
        "{",
        "  id: 3,",
        "  first_name: 'Milagro',",
        "  last_name: 'Juarez',",
        "  email: 'miljua23@example.com'",
        "},",
        "{",
        "  id: 4,",
        "  first_name: 'Olivia',",
        "  last_name: 'Brown',",
        "  email: 'olibrown432@example.net'",
        "}"
    ]

    prepare_and_assert(input_array, output_array)

# Test 3
def test_task_three():
    # Inputs
    input_array = [
        '3'
    ]

    # Outputs
    output_array = [
        "{",
        "  id: 6,",
        "  first_name: 'Kai',",
        "  last_name: 'Nathaniel',",
        "  email: 'kai.n@example.org'",
        "}"
    ]

    prepare_and_assert(input_array, output_array)

# Test 4
def test_task_four():
    # Inputs
    input_array = [
        '4'
    ]

    # Outputs
    output_array = [
        "[",
        "  {",
        "    id: 1,",
        "    first_name: 'Joshua',",
        "    last_name: 'Diaz',",
        "    email: 'j3@example.com'",
        "  },",
        "  {",
        "    id: 2,",
        "    first_name: 'Song',",
        "    last_name: 'Gonzalez',",
        "    email: 'sgo@example.com'",
        "  },",
        "  {",
        "    id: 3,",
        "    first_name: 'Milagro',",
        "    last_name: 'Juarez',",
        "    email: 'miljua23@example.com'",
        "  },",
        "  {",
        "    id: 4,",
        "    first_name: 'Olivia',",
        "    last_name: 'Brown',",
        "    email: 'olibrown432@example.net'",
        "  }",
        "]"
    ]

    prepare_and_assert(input_array, output_array)
