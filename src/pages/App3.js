import React, { Component } from 'react';
import ContactList from '../components/App3/ContactList';
import Search from '../components/App3/Search';

const CONTACTS = [
  {
    name: 'Camden Breitenberg',
    email: 'Wilbert.Pagac@yahoo.com',
    phone: '419.487.4757 x770',
    tags: ['business', 'favorite'],
  },
  {
    name: 'Wendell Koss',
    email: 'Keaton39@gmail.com',
    phone: '1-191-452-3291 x0304',
    tags: ['family', 'business'],
  },
  {
    name: 'Randall Gusikowski',
    email: 'Zechariah70@yahoo.com',
    phone: '948.312.1478 x2169',
    tags: ['friend', 'favorite'],
  },
  {
    name: 'Geovany Farrell',
    email: 'Orval.Denesik98@hotmail.com',
    phone: '1-472-883-7438',
    tags: ['friend'],
  },
  {
    name: 'Abe Jakubowski',
    email: 'Mauricio.Okuneva5@yahoo.com',
    phone: '1-578-864-2360',
    tags: ['family'],
  },
];

const TAGS = ['business', 'favorite', 'family', 'friend'];

export default class App3 extends Component {
  static defaultProps = {
    withLink: false,
  };

  state = {
    search: '',
    checkedTags: [],
    contacts: CONTACTS,
    sortAsc: true,
  };

  componentDidMount() {
    const contacts = this.sortContacts(this.state.contacts);
    this.setState({ contacts });
  }

  filterContacts = (
    checkedTags = this.state.checkedTags,
    search = this.state.search
  ) => {
    const contacts =
      checkedTags.length === 0
        ? CONTACTS
        : CONTACTS.filter(contact => {
            const commonTags = contact.tags.filter(tag =>
              checkedTags.includes(tag)
            );
            return commonTags.length > 0;
          });
    if (!search) {
      return contacts;
    }
    const searchRegex = new RegExp(search, 'i');
    return contacts.filter((contact, i) => {
      const nameMatch = contact.name.match(searchRegex);
      const emailMatch = contact.email.match(searchRegex);
      const phoneMatch = contact.phone.match(searchRegex);
      return nameMatch || emailMatch || phoneMatch;
    });
  };

  sortContacts = (unsortedContacts, sortAsc = this.state.sortAsc) => {
    return unsortedContacts.sort((a, b) => {
      if (sortAsc) {
        return a.name < b.name ? -1 : 1;
      }
      return a.name > b.name ? -1 : 1;
    });
  };

  onChange = e => {
    const search = e.target.value;
    const unsortedContacts = this.filterContacts(undefined, search);
    const contacts = this.sortContacts(unsortedContacts);
    this.setState({ search, contacts });
  };

  onTagClick = e => {
    const checkedTags = e.target.checked
      ? this.state.checkedTags.concat(e.target.value)
      : this.state.checkedTags.filter(c => c !== e.target.value);
    const contacts = this.filterContacts(checkedTags);
    this.setState({ contacts, checkedTags });
  };

  handleSort = e => {
    e.preventDefault();
    const sortAsc = !this.state.sortAsc;
    const contacts = this.sortContacts(this.state.contacts, sortAsc);
    this.setState({ sortAsc, contacts });
  };

  render() {
    return (
      <div>
        <Search
          onChange={this.onChange}
          onTagClick={this.onTagClick}
          tags={TAGS}
        />
        <div className="headerRow">
          <h1>All Contacts</h1>
          <a onClick={this.handleSort}>
            {this.state.sortAsc ? <span>&darr;</span> : <span>&uarr;</span>}
          </a>
        </div>
        <ContactList
          contacts={this.state.contacts}
          withLink={this.props.withLink}
        />
      </div>
    );
  }
}
