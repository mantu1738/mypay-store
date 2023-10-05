import { Component, OnInit } from '@angular/core';

import { CategoryService } from '@shared/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit {
  /**
   * An array containing the list of product categories.
   * @type {string[]}
   */
  categories: string[] = [];

  /**
   * Indicates whether the component is in a loading state.
   * @type {boolean}
   */
  loading = true;

  /**
   * Creates an instance of CategoriesComponent.
   * @constructor
   * @param {CategoryService} categoryService - The service responsible for fetching categories.
   */
  constructor(private categoryService: CategoryService) { }

  /**
   * Lifecycle hook called after the component has been initialized.
   * Fetches categories from the service and updates the component state.
   * @method
   * @returns {void}
   */
  ngOnInit(): void {
    /**
     * Subscribes to the category service to get the list of categories.
     * Updates the component's categories and loading state.
     */
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
      this.loading = false;
    });
  }
}
