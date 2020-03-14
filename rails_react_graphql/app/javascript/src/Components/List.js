import React from 'react'
//css
import '../stylesheets/list.css'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filtered: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  componentDidMount() {
    this.setState({
      filtered: this.props.items
    })
  }

  //   componentWllReceiveProps(nextProps) {
  //     this.setState({
  //       filtered: nextProps.items
  //     })
  //   }

  addItem(e) {
    // // Prevent button click from submitting form
    e.preventDefault()

    // // Create variables for our list, the item to add, and our form
    // let list = Sample
    const newItem = document.getElementById('addInput')
    // const form = document.getElementById('addItemForm')

    // // If our input has a value
    // if (newItem.value != '') {
    //   // Add the new item to the end of our list array
    //   list.push(newItem.value)
    //   // Then we use that to set the state for list
    //   this.setState({
    //     list: list
    //   })
    //   // Finally, we need to reset the form
    //   newItem.classList.remove('is-danger')
    //   form.reset()
    // } else {
    //   // If the input doesn't have a value, make the border red since it's required
    //   newItem.classList.add('is-danger')
    // }
    return <div>{newItem}</div>
  }

  handleChange(e) {
    // Variable to hold the original version of the list
    let currentList = []
    // Variable to hold the filtered list before putting into state
    let newList = []
    // If the search bar isn't empty
    if (e.target.value !== '') {
      // Assign the original list to currentList
      currentList = this.props.items
      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter(item => {
        // change current item to lowercase
        const lc = item.exerciseName.toLowerCase()
        // change search term to lowercase
        const filter = e.target.value.toLowerCase()
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList.
        return lc.includes(filter)
      })
    } else {
      // If the search bar is empty, set newList to original task list
      newList = this.props.items
    }
    // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    })
  }

  render() {
    const { filtered } = this.state
    return (
      <div>
        <section className="section">
          <form className="form" id="addItemForm">
            <input
              type="text"
              className="input"
              id="addInput"
              placeholder="Something that needs to be done..."
            />
            <button className="button is-info" onClick={this.addItem}>
              Add Item
            </button>
          </form>
        </section>
        <input
          type="text"
          className="input"
          onChange={this.handleChange}
          placeholder="Search..."
        />
        <ul>
          {Object.keys(filtered).map(item => (
            <li className="exercise_list" key={item}>
              {filtered[item].exerciseName} &nbsp;
              {/* <span
                className="delete"
                onClick={() => this.props.delete(item)}
              /> */}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default List
