<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4>Create</h4>
        </div>
        <div class="card-body">
          <form method="post" action="{{ route('admin.posts.store') }}">
            <div class="form-group">
              <label>Company</label>
              <select
                class="form-control"
                name="company"
                id="select-company"
              ></select>
            </div>
            <div class="form-group">
              <label>Language</label>
              <select
                class="form-control"
                multiple
                name="language"
                id="select-language"
              ></select>
            </div>
            <div class="form-group">
              <label>City</label>
              <select
                class="form-control"
                name="company"
                id="select-city"
              ></select>
            </div>
            <div class="form-group">
              <label>District</label>
              <select
                class="form-control"
                name="company"
                id="select-district"
              ></select>
            </div>
            <div class="form-row">
              <div class="form-group col-4">
                <label>Min Salary</label>
                <input type="number" name="min_salary" class="form-control" />
              </div>
              <div class="form-group col-4">
                <label>Max Salary</label>
                <input type="number" name="max_salary" class="form-control" />
              </div>
              <div class="form-group col-4">
                <label>Max Salary</label>
                <select name="current_salary" class="form-control">
                  @foreach($currencies as $currency => $value)
                  <option value="{{ $value }}">
                    {{ $currency }}
                  </option>
                  @endforeach
                </select>
              </div>
            </div>
            <div class="form-group">
              <label>Requirement</label>
              <textarea
                name="requirement"
                class="form-control"
                cols="40"
              ></textarea>
            </div>
            <div class="form-row">
              <div class="form-group col-4">
                <label>Start Date</label>
                <input type="date" name="start_date" class="form-control" />
              </div>
              <div class="form-group col-4">
                <label>End Date</label>
                <input type="date" name="end_date" class="form-control" />
              </div>
              <div class="form-group col-4">
                <label>Past time</label>
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    id="customRadio1"
                    name="role"
                    class="custom-control-input"
                    value="1"
                    checked
                  />
                  <label class="custom-control-label" for="customRadio1"
                    >YES</label
                  >
                </div>
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    id="customRadio2"
                    name="role"
                    class="custom-control-input"
                    value="0"
                  />
                  <label class="custom-control-label" for="customRadio2"
                    >NO</label
                  >
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="col-4">
                <label>Number Applicant</label>
                <input
                  type="number"
                  name="number_applicant"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-row mb-2">
              <div class="col-4">
                <label>Title</label>
                <input
                  type="text"
                  name="job_title"
                  class="form-control"
                  id="title"
                />
              </div>
              <div class="col-4">
                <label>Slug</label>
                <input type="text" name="slug" class="form-control" id="slug" />
              </div>
            </div>
            <div class="form-group">
              <button class="btn btn-success">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
async function loadDistrict() {
  // // $('#select-city').empty();
  // const path = $("#select-city option:selected").data('path');
  // const response = await fetch('{{ asset('location/') }}' + path);
  // const districts = await response.json();
  // $.each(districts.district, function(index, each) {
  //   console.log(each);
  //   if(each.pre === 'Quận' ){
  //     $("#select-district").append(`
  //                       <option>
  //                           ${each.name}
  //                       </option>`)
  //   }
  // })
  console.log("1");
}
$(document).ready(async function ($) {
  const response = await fetch("https://provinces.open-api.vn/api/");
  const cities = await response.json();
  $.each(cities, async function (index, each) {
    $("#select-city").append(
      `<option value='${each.code}' data-path='${each.file_path}'> ${each.name} </option>`
    );
    console.log(each.code);
  });
  $("#select-city").change(function () {
    console.log($("#select-city"));
    loadDistrict();
  });
  $("#select-company").select2({
    tags: true,
    ajax: {
      url: "http://web_moi_gioi_viec_lam.test/api/companies",
      data: function (params) {
        var queryParameters = {
          q: params.term,
        };

        return queryParameters;
      },
      processResults: function (data) {
        return {
          results: $.map(data.data, function (item) {
            return {
              text: item.name,
              id: item.id,
            };
          }),
        };
      },
    },
  });

  $("#select-language").select2({
    ajax: {
      url: "http://web_moi_gioi_viec_lam.test/api/languages",
      data: function (params) {
        var queryParameters = {
          q: params.term,
        };

        return queryParameters;
      },
      processResults: function (data) {
        return {
          results: $.map(data.data, function (item) {
            return {
              text: item.name,
              id: item.id,
            };
          }),
        };
      },
    },
  });
});
</script>
