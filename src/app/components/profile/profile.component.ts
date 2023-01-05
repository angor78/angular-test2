import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProfileResponse, ProfileService} from "../../services/profile.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile$!: Observable<ProfileResponse>

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private router: Router) {
  }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('userId')
    if (userId) {
      this.profile$ = this.profileService.getUsersProfile(Number(userId))
    }

  }

  backToUsersHandler() {
    this.router.navigate(['/users'])
  }
}
