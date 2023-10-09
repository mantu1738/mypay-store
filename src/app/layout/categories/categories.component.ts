import { Component, OnInit } from '@angular/core';
import { faClose, faBars } from '@fortawesome/free-solid-svg-icons';

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
  loading: boolean = true;

  /**
   * Indicates whether the mobile menu is open.
   * @type {boolean}
   */
  mobileMenuOpen: boolean = false;

  // Font Awesome icons
  menuIcon = faBars;
  closeIcon = faClose;

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

  /**
   * Toggles the mobile menu state.
   * @method
   * @returns {void}
   */
  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  /**
   * Closes the mobile menu.
   * @method
   */
  onLinkClicked(): void {
    this.mobileMenuOpen = false;
  }
}
