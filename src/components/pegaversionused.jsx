import React, { Component } from "react";
import { getSkills } from './../services/skills';

class skills extends Component {
    state = {
      skills: []
    };
  
    componentDidMount() {
  
      this.setState({ skills: getskills()});
    }
  
  
    getPagedData = () => {
      const {
        pageSize,
        currentPage,
        sortColumn,
        selectedGenre,
        skills: allskills
      } = this.state;
  
      const filtered =
        selectedGenre && selectedGenre._id
          ? allskills.filter(m => m.genre._id === selectedGenre._id)
          : allskills;
  
      const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
  
      const skills = paginate(sorted, currentPage, pageSize);
  
      return { totalCount: filtered.length, data: skills };
    };
  
    render() {
      const { length: count } = this.state.skills;
      const { pageSize, currentPage, sortColumn } = this.state;
  
      if (count === 0) return <p>There are no skills in the database.</p>;
  
      const { totalCount, data: skills } = this.getPagedData();
  
      return (
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <p>Showing {totalCount} skills in the database.</p>
            <skillsTable
              skills={skills}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
          </div>
        </div>
      );
    }
  }
  
  export default skills;
  
