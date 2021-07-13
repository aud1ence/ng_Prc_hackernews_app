import {Component, OnInit} from '@angular/core';
import {Article} from "../article";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: Article = {};
  articles: Article[] = [
    {
      title: '10 Cool Angular Material Admin Dashboard Templates',
      url: 'https://hackernoon.com/10-cool-angular-material-admin-dashboard-templates-jn1t35b8'
    },
    {
      title: 'Using Travis CI to host an Angular App on GitHub Pages',
      url: 'https://hackernoon.com/using-travis-ci-to-host-an-angular-app-on-github-pages-f8x35pj'
    },
    {
      title: 'React vs Angular: Final Thoughts',
      url: 'https://hackernoon.com/react-vs-angular-final-thoughts-8bik3157'
    },
    {
      title: 'Folder Structure of Angular Applications\n',
      url: 'https://hackernoon.com/folder-structure-of-angular-applications-9a2234hp'
    },
    {
      title: 'Angular Server Side Rendering State Transfer For HTTP Requests\n',
      url: 'https://hackernoon.com/angular-server-side-rendering-state-transfer-for-http-requests-wu263t3h'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewArticle() {
    this.articles.push(this.article);
  }
}
