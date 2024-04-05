// package com.kuber.demo.user;

// import com.kuber.demo.article.model.Article;
// import com.kuber.demo.article.model.ArticleDto;
// import com.kuber.demo.common.component.MessengerVo;
// import com.kuber.demo.user.model.User;
// import com.kuber.demo.user.model.UserDto;
// import com.kuber.demo.user.service.UserServiceImpl;

// import io.swagger.v3.oas.annotations.Operation;
// import io.swagger.v3.oas.annotations.responses.ApiResponse;
// import io.swagger.v3.oas.annotations.responses.ApiResponses;
// import lombok.RequiredArgsConstructor;
// import lombok.extern.slf4j.Slf4j;

// import org.springdoc.core.converters.models.Pageable;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.sql.SQLException;
// import java.util.*;

// @ApiResponses(value = {
// @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
// @ApiResponse(responseCode = "404", description = "Customer not found") })

// @CrossOrigin(origins = "*", allowedHeaders = "*")
// @RestController
// @RequiredArgsConstructor
// // @NoArgsConstructor
// @RequestMapping(path = "/api/users")
// @Slf4j
// public class UserController {

// private final UserServiceImpl serImpl;

// // ----------------------------------------------------------------
// // @Operation(summary = "test", description = "회원 정보가 삭제됩니다.", tags = {
// "Member
// // Controller" })
// @PostMapping("")
// public ResponseEntity<MessengerVo> save(@RequestBody Map<String, UserDto>
// param) {
// log.info("입력받은 정보 : {}", param);
// // User newUser = service.save(param);
// return ResponseEntity.ok(new MessengerVo());
// }

// // ---------------------------- command-setter ------------------------

// // ---------------------------- Query-getter ------------------------
// // @Operation(summary = "회원 로그인 요청", description = "로그인됩니다.", tags = { "User
// // Controller" })
// @GetMapping("/login")
// public ResponseEntity<MessengerVo> login(@RequestBody Map<?, ?> paramap) {
// Map<String, MessengerVo> response = new HashMap<>();

// String username = (String) paramap.get("username");

// List<UserDto> user = serImpl.findUsersByName(username);

// // response.put("로그인성공여부", user == null ? Messenger.FAIL
// // : user.getPassword().equals(paramap.get("password")) ? Messenger.SUCCESS :
// // Messenger.WRONG_PASSWORD);

// log.info("{}", user);
// return ResponseEntity.ok(new MessengerVo());
// }

// @PostMapping("/join")
// public Map<String, ?> join(@RequestBody Map<String, ?> paramap) {
// log.info("입력받은 아이디 : {}", paramap.get("username"));

// UserDto user = serImpl.save(UserDto.builder()
// .username((String) paramap.get("username"))
// .password((String) paramap.get("password"))
// .name((String) paramap.get("name"))
// .job((String) paramap.get("job"))
// .phone((String) paramap.get("phone"))
// .build());

// log.info("DB에 저장된 User 정보 : {}", user);
// // log.info("DB에 저장된 User 정보 : {없음}");
// Map<String, String> map = new HashMap<>();
// // map.put("result", Messenger.SUCCESS);
// map.put("result", "성공");

// return map;
// }

// @GetMapping("/all-users")
// public ResponseEntity<List<UserDto>> findAll(Pageable pageable) {
// Map<String, Object> resMap = new HashMap<>();

// // @SuppressWarnings("unchecked")
// // List<User> list = List.of(User.builder()
// // .id(0L)
// // .username("idid")
// // .password("password")
// // .name("name")
// // .phone("phone")
// // .job("ob")
// // .build());

// List<UserDto> list = serImpl.findAll();

// if (list.isEmpty()) {
// // resMap.put("message", Messenger.FAIL);
// resMap.put("message", "FAIL");
// } else {
// // resMap.put("message", Messenger.SUCCESS);
// resMap.put("message", "SUCCESS");
// resMap.put("result", list);
// log.info("리스트 사이즈 : {} ", list.size());
// }
// return ResponseEntity.ok(new ArrayList<UserDto>());
// }

// @GetMapping("/{id}") // {id}와 @PathVariable Long id의 값은 같아야 함
// public ResponseEntity<Optional<UserDto>> findUserById(@PathVariable Long id)
// {
// Map<String, String> response = new HashMap<>();

// return ResponseEntity.ok(Optional.of(new UserDto()));
// }

// @PutMapping("/updatePassword")
// public Map<String, ?> updatePassword(@RequestBody Map<?, ?> paramap) {
// Map<String, String> response = new HashMap<>();
// return response;
// }

// @PutMapping("/deleteUser")
// public Map<String, ?> deleteUser(@RequestBody Map<?, ?> paramap) {
// Map<String, String> response = new HashMap<>();

// return response;
// }

// @PutMapping("/getUserList")
// public Map<String, ?> getUserList() {
// Map<String, String> response = new HashMap<>();

// return response;
// }

// @PutMapping("/findUserByName")
// public Map<String, ?> findUserByName(@RequestBody Map<?, ?> paramap) {
// Map<String, String> response = new HashMap<>();
// return response;

// }

// @PutMapping("/findUserByJob")
// public Map<String, ?> findUserByJob(@RequestBody Map<?, ?> paramap) {
// Map<String, String> response = new HashMap<>();
// return response;
// }

// @PutMapping("/countUser")
// public Map<String, ?> countUser() {
// Map<String, String> response = new HashMap<>();
// return response;
// }

// @PutMapping("/getOne")
// public Map<String, ?> getOne(@RequestBody Map<?, ?> paramap) throws
// SQLException {
// Map<String, String> response = new HashMap<>();
// return response;
// }

// @PutMapping("/findUsers")
// public Map<String, ?> findUsers() throws SQLException {
// Map<String, String> response = new HashMap<>();

// return response;
// }

// @PutMapping("/getUser")
// public Map<String, ?> getUser(@RequestBody Map<?, ?> paramap) throws
// SQLException {
// Map<String, String> response = new HashMap<>();

// return response;
// }

// @PutMapping("/touchTable")
// public Map<String, ?> touchTable() throws SQLException {
// Map<String, String> response = new HashMap<>();
// return response;
// }

// @PutMapping("/removeTable")
// public Map<String, ?> removeTable() throws SQLException {
// Map<String, String> response = new HashMap<>();
// return response;
// }

// }
