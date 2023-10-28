import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GithubIssues = () => {
 const [issues, setIssues] = useState([]);

 useEffect(() => {
    fetchIssues();
 }, []);

 const fetchIssues = async () => {
    try {
      const response = await axios.get('https://api.github.com/repos/facebook/react/issues');
      setIssues(response.data);
    } catch (error) {
      console.error('Error fetching issues:', error);
    }
 };

 return (
    <div>
      <h1>React GitHub Issues</h1>
      <ul>
        {issues.map(issue => (
          <li key={issue.id}>
            <a href={issue.html_url}>{issue.title}</a>
            <p>Opened by: {issue.user.login}</p>
          </li>
        ))}
      </ul>
    </div>
 );
};

export default GithubIssues;